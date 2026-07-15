/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Return Reason Report
 * Version : V12.0
 * =====================================================
 */

export function buildReturnReasonReport(

    sales=[],

    returns=[],

    lookup={}

){

    const report={};

    returns.forEach(row=>{

        const sale=

            lookup[

                row.order_line_id

            ];

        if(!sale){

            return;

        }

        const key=

            row.return_reason || "Unknown";

        if(!report[key]){

            report[key]={

                returnReason:key,

                saleGMV:0,

                saleUnits:0,

                cancelGMV:0,

                cancelUnits:0,

                rtoGMV:0,

                rtoUnits:0,

                cxGMV:0,

                cxUnits:0,

                netGMV:0,

                netUnits:0

            };

        }

        const item=

            report[key];

        const gmv=

            Number(

                sale.final_amount

            )||0;

        const type=

            String(

                row.type||""

            )

            .trim()

            .toUpperCase();

        if(type==="RTO"){

            item.rtoGMV+=gmv;

            item.rtoUnits++;

        }

        else if(type==="RETURN"){

            item.cxGMV+=gmv;

            item.cxUnits++;

        }

    });

    Object.values(report).forEach(item=>{

        item.netGMV=

            item.saleGMV

            -

            item.cancelGMV

            -

            item.rtoGMV

            -

            item.cxGMV;

        item.netUnits=

            item.saleUnits

            -

            item.cancelUnits

            -

            item.rtoUnits

            -

            item.cxUnits;

    });

    return Object.values(report)

        .sort(

            (a,b)=>

                (b.rtoGMV+b.cxGMV)

                -

                (a.rtoGMV+a.cxGMV)

        );

}