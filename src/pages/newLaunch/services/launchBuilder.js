/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Launch Builder
 * Version : V1.0
 * =====================================================
 */

import {

    DataStore

}

from "../../../services/dataService.js";

const MONTH_MAP={

    JAN:0,
    FEB:1,
    MAR:2,
    APR:3,
    MAY:4,
    JUNE:5,
    JULY:6,
    AUG:7,
    SEP:8,
    OCT:9,
    NOV:10,
    DEC:11

};

/**
 * =====================================================
 * Build Launch Dataset
 * =====================================================
 */

export function buildLaunchDataset(

    launchWindow=30

){

    const master=

        DataStore.productMaster||[];

    const sales=

        DataStore.sales||[];

    /**
     * ==========================================
     * Sales Summary
     * ==========================================
     */

    const salesMap={};

    sales.forEach(

        row=>{

            const styleId=

                String(

                    row.style_id||""

                ).trim();

            if(!styleId){

                return;

            }

            if(

                !salesMap[styleId]

            ){

                salesMap[styleId]={

                    units:0,

                    revenue:0,

                    orders:new Set()

                };

            }

            salesMap[styleId].units+=

                Number(

                    row.qty||0

                );

            salesMap[styleId].revenue+=

                Number(

                    row.final_amount||0

                );

            salesMap[styleId].orders.add(

                row.order_line_id

            );

        }

    );

    /**
     * ==========================================
     * Launch Dataset
     * ==========================================
     */

    const today=

        new Date();

    const rows=[];

    master.forEach(

        row=>{

            const launchDate=

                buildDate(

                    row.date,

                    row.month,

                    row.year

                );

            if(

                !launchDate

            ){

                return;

            }

            const age=

                getDaysBetween(

                    launchDate,

                    today

                );

            if(

                age>

                launchWindow

            ){

                return;

            }

            const styleId=

                String(

                    row.style_id||""

                ).trim();

            const sale=

                salesMap[styleId]||

                {

                    units:0,

                    revenue:0,

                    orders:new Set()

                };

            const units=

                sale.units;

            const revenue=

                sale.revenue;

            rows.push({

                styleId,

                brand:

                    row.brand||"",

                articleType:

                    row.article_type||"",

                launchDate,

                launchAge:age,

                units,

                revenue,

                orders:

                    sale.orders.size,

                asp:

                    units

                    ?

                    revenue/units

                    :

                    0,

                status:

                    "Pending"

            });

        }

    );

    return rows;

}

/**
 * =====================================================
 * Build Date
 * =====================================================
 */

function buildDate(

    date,

    month,

    year

){

    const monthIndex=

        MONTH_MAP[

            String(

                month||""

            )

            .toUpperCase()

        ];

    if(

        monthIndex===undefined

    ){

        return null;

    }

    return new Date(

        Number(year),

        monthIndex,

        Number(date)

    );

}

/**
 * =====================================================
 * Days Between
 * =====================================================
 */

function getDaysBetween(

    start,

    end

){

    return Math.floor(

        (

            end-start

        )

        /

        86400000

    );

}