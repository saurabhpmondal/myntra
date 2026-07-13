/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Order Line Dataset
 * Version : V1.0
 * =====================================================
 */

import {

    buildOrderIndex

}

from "./buildOrderIndex.js";

import {

    mapReturns

}

from "./mapReturns.js";

import {

    BUSINESS_RULES

}

from "../../config/businessRules.js";

/**
 * =====================================================
 * Build Dataset
 * =====================================================
 */

export function buildOrderLineDataset(

    sales=[],

    returns=[]

){

    const orderIndex=

        buildOrderIndex(

            sales

        );

    const rows=

        mapReturns(

            orderIndex,

            returns

        );

    rows.forEach(

        row=>{

            const status=

                String(

                    row.orderStatus??

                    ""

                )

                .trim()

                .toUpperCase();

            row.isCancelled=

                BUSINESS_RULES

                .CANCEL_STATUS

                .includes(

                    status

                );

            row.ignoreSaleRTO=

                BUSINESS_RULES

                .IGNORE_STATUS

                .includes(

                    status

                );

            row.netUnits=

                calculateNetUnits(

                    row

                );

            row.netGMV=

                calculateNetGMV(

                    row

                );

        }

    );

    return rows;

}

/**
 * =====================================================
 * Net Units
 * =====================================================
 */

function calculateNetUnits(

    row

){

    let units=

        Number(

            row.saleUnits||0

        );

    if(

        row.isCancelled

    ){

        units--;

    }

    if(

        row.isRTO

    ){

        units--;

    }

    if(

        row.isCXReturn

    ){

        units--;

    }

    return units;

}

/**
 * =====================================================
 * Net GMV
 * =====================================================
 */

function calculateNetGMV(

    row

){

    let value=

        Number(

            row.saleGMV||0

        );

    if(

        row.isCancelled||

        row.isRTO||

        row.isCXReturn

    ){

        value=0;

    }

    return value;

}