/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Order Index
 * Version : V1.0
 * =====================================================
 */

import {

    buildDate

}

from "../../utils/buildDate.js";

/**
 * =====================================================
 * Build Order Index
 * =====================================================
 */

export function buildOrderIndex(

    sales=[]

){

    const index={};

    sales.forEach(

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

            index[orderLineId]={

                /**
                 * Sale Information
                 */

                orderLineId,

                sellerId:

                    row.seller_id??"",

                styleId:

                    row.style_id??"",

                brand:

                    row.brand??"",

                articleType:

                    row.article_type??"",

                poType:

                    row.po_type??"",

                warehouseId:

                    row.warehouse_id??"",

                /**
                 * Sale Metrics
                 */

                saleUnits:

                    Number(

                        row.qty??0

                    ),

                saleGMV:

                    Number(

                        row.final_amount??0

                    ),

                orderStatus:

                    row.order_status??"",

                /**
                 * Sale Period
                 */

                date:

                    row.date,

                month:

                    row.month,

                year:

                    row.year,

                saleDate:

                    buildDate(

                        row.date,

                        row.month,

                        row.year

                    ),

                /**
                 * Return Information
                 */

                hasReturn:false,

                returnType:null,

                returnReason:null,

                returnDate:null

            };

        }

    );

    return index;

}