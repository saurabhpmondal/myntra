/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Builder
 * Version : V3.0
 * =====================================================
 */

import { DataStore } from "../../../services/dataService.js";

import { LookupStore } from "../../../services/lookupService.js";

import { enrichRatings }
from "../enrichers/enrichRatings.js";

import { enrichStateCoverage }
from "../enrichers/enrichStateCoverage.js";

import { enrichMovement }
from "../enrichers/enrichMovement.js";

import { calculateUnitsSold }
from "../calculations/calculateUnitsSold.js";

import { calculateOverallDW }
from "../calculations/calculateOverallDW.js";

import { calculateBrandDW }
from "../calculations/calculateBrandDW.js";

import { calculateOverallRank }
from "../calculations/calculateOverallRank.js";

import { calculateBrandRank }
from "../calculations/calculateBrandRank.js";

import { calculateCumulativeDW }
from "../calculations/calculateCumulativeDW.js";

import { calculateBadges }
from "../calculations/calculateBadges.js";

/**
 * =====================================================
 * Build Demand Index
 * =====================================================
 */

export function buildDemandIndex(

    fromDate,

    toDate

){

    /**
     * ==========================================
     * Current Period
     * ==========================================
     */

    const currentSales=

        getSales(

            fromDate,

            toDate

        );

    /**
     * ==========================================
     * Previous Period
     * ==========================================
     */

    const totalDays=

        Math.floor(

            (

                toDate-

                fromDate

            )

            /

            86400000

        )+1;

    const previousToDate=

        new Date(

            fromDate

        );

    previousToDate.setDate(

        previousToDate.getDate()-1

    );

    const previousFromDate=

        new Date(

            previousToDate

        );

    previousFromDate.setDate(

        previousFromDate.getDate()

        -

        (

            totalDays-1

        )

    );

    const previousSales=

        getSales(

            previousFromDate,

            previousToDate

        );

    /**
     * ==========================================
     * Build Current Rows
     * ==========================================
     */

    let rows=

        buildRows(

            groupSalesByStyle(

                currentSales

            ),

            currentSales

        );

    /**
     * ==========================================
     * Build Previous Rows
     * ==========================================
     */

    let previousRows=

        buildRows(

            groupSalesByStyle(

                previousSales

            ),

            previousSales

        );

    /**
     * ==========================================
     * Previous Period Ranking
     * ==========================================
     */

    previousRows=

        calculateBrandDemandWeight(

            previousRows

        );

    previousRows=

        calculateOverallRank(

            previousRows

        );

    previousRows=

        calculateBrandRank(

            previousRows

        );

    /**
     * ==========================================
     * Current Period Ranking
     * ==========================================
     */

    rows=

        calculateBrandDemandWeight(

            rows

        );

    rows=

        calculateOverallRank(

            rows

        );

    rows=

        calculateBrandRank(

            rows

        );

    /**
     * ==========================================
     * Enrichers
     * ==========================================
     */

    rows=

        enrichMovement(

            rows,

            previousRows

        );

    rows=

        enrichRatings(

            rows

        );

    rows=

        enrichStateCoverage(

            rows

        );

    /**
     * ==========================================
     * Cumulative Demand Weight
     * ==========================================
     */

    rows=

        calculateCumulativeDW(

            rows

        );

    /**
     * ==========================================
     * Badges
     * ==========================================
     */

    rows.forEach(

        row=>{

            row.badges=

                calculateBadges(

                    row

                );

        }

    );

    return rows;

}

/**
 * =====================================================
 * Get Sales
 * =====================================================
 */

function getSales(

    fromDate,

    toDate

){

    const sales=

        DataStore.sales || [];

    const monthMap={

        JAN:0,

        FEB:1,

        MAR:2,

        APR:3,

        MAY:4,

        JUN:5,

        JUNE:5,

        JUL:6,

        JULY:6,

        AUG:7,

        SEP:8,

        OCT:9,

        NOV:10,

        DEC:11

    };

    return sales.filter(

        row=>{

            const day=

                Number(

                    row.date || 0

                );

            const year=

                Number(

                    row.year || 0

                );

            const month=

                monthMap[

                    String(

                        row.month || ""

                    )

                    .trim()

                    .toUpperCase()

                ];

            if(

                day===0 ||

                year===0 ||

                month===undefined

            ){

                return false;

            }

            const orderDate=

                new Date(

                    year,

                    month,

                    day

                );

            return(

                orderDate>=fromDate

                &&

                orderDate<=toDate

            );

        }

    );

}

/**
 * =====================================================
 * Group Sales By Style
 * =====================================================
 */

function groupSalesByStyle(

    sales

){

    const map={};

    sales.forEach(

        row=>{

            const styleId=

                String(

                    row.style_id || ""

                ).trim();

            if(

                !styleId

            ){

                return;

            }

            if(

                !map[styleId]

            ){

                map[styleId]=[];

            }

            map[styleId].push(

                row

            );

        }

    );

    return map;

}

/**
 * =====================================================
 * Build Rows
 * =====================================================
 */

function buildRows(

    grouped,

    sales

){

    const totalUnits=

        calculateUnitsSold(

            sales

        );

    return Object.entries(

        grouped

    )

    .map(

        ([styleId,rows])=>{

            const product=

                LookupStore.productMap[

                    styleId

                ] || {};

            const unitsSold=

                calculateUnitsSold(

                    rows

                );

            return{

                styleId,

                erpSku:

                    product.erpSku || "",

                brand:

                    product.brand || "",

                category:

                    product.category || "",

                erpStatus:

                    product.erpStatus || "",

                mrp:

                    product.mrp || 0,

                tp:

                    product.tp || 0,

                launchDate:

                    product.launchDate || "",

                liveDate:

                    product.liveDate || "",

                rating:0,

                stateCount:0,

                unitsSold,

                overallDW:

                    calculateOverallDW(

                        unitsSold,

                        totalUnits

                    ),

                brandDW:0,

                overallRank:0,

                previousRank:null,

                rankChange:null,

                rankMovement:"NEW",

                brandRank:0,

                cumulativeDW:0,

                badges:[]

            };

        }

    )

    .filter(

        row=>

            row.unitsSold>0

    );

}

/**
 * =====================================================
 * Brand Demand Weight
 * =====================================================
 */

function calculateBrandDemandWeight(

    rows

){

    const brandTotals={};

    rows.forEach(

        row=>{

            const brand=

                row.brand || "";

            if(

                !brandTotals[

                    brand

                ]

            ){

                brandTotals[

                    brand

                ]=0;

            }

            brandTotals[

                brand

            ]+=

                row.unitsSold;

        }

    );

    rows.forEach(

        row=>{

            row.brandDW=

                calculateBrandDW(

                    row.unitsSold,

                    brandTotals[

                        row.brand

                    ]

                );

        }

    );

    return rows;

}