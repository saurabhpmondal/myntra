/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Map Returns
 * Version : V1.0
 * =====================================================
 */

import {

    buildDate

}

from "../../utils/buildDate.js";

import {

    BUSINESS_RULES

}

from "../../config/businessRules.js";

/**
 * =====================================================
 * Map Returns
 * =====================================================
 */

export function mapReturns(

    orderIndex={},

    returns=[]

){

    returns.forEach(

        row=>{

            const orderLineId=

                String(

                    row.order_line_id??

                    ""

                ).trim();

            if(

                !orderLineId

            ){

                return;

            }

            const order=

                orderIndex[

                    orderLineId

                ];

            if(

                !order

            ){

                return;

            }

            const returnType=

                String(

                    row.type??

                    ""

                ).trim()

                .toUpperCase();

            order.hasReturn=true;

            order.returnType=

                returnType;

            order.returnReason=

                row.return_reason??

                "";

            order.returnStatus=

                row.status??

                "";

            order.returnDate=

                buildDate(

                    row.date,

                    row.month,

                    row.year

                );

            order.returnMonth=

                row.month;

            order.returnYear=

                row.year;

            order.isRTO=

                returnType===

                BUSINESS_RULES

                .RETURN_TYPES

                .RTO;

            order.isCXReturn=

                returnType===

                BUSINESS_RULES

                .RETURN_TYPES

                .CX_RETURN;

        }

    );

    return Object.values(

        orderIndex

    );

}