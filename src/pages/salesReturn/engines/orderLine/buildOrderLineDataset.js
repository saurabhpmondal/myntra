/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Order Line Dataset
 * Version : V2.0
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

        }

    );

    return rows;

}