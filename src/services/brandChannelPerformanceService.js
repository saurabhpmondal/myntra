/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Brand Channel Performance Service
 * Version : V1.1
 * =====================================================
 */

import { getReportRows } from "./reportHelper.js";

export function getBrandChannelPerformance(){

    const rows = getReportRows();

    const summary = {};

    let totalUnits = 0;

    rows.forEach(row=>{

        const brand = row.brand || "Unknown";

        if(!summary[brand]){

            summary[brand]={

                brand,

                PPMP:0,

                SJIT:0,

                SOR:0,

                total:0,

                gmv:0

            };

        }

        const qty = Number(row.qty || 0);

        const gmv = Number(row.final_amount || 0);

        const poType = String(row.po_type || "").toUpperCase();

        if(summary[brand][poType] !== undefined){

            summary[brand][poType] += qty;

        }

        summary[brand].total += qty;

        summary[brand].gmv += gmv;

        totalUnits += qty;

    });

    const data = Object.values(summary)

        .map(item=>({

            brand:item.brand,

            PPMP:item.PPMP,

            SJIT:item.SJIT,

            SOR:item.SOR,

            total:item.total,

            gmv:item.gmv,

            asp:

                item.total===0

                ?0

                :item.gmv/item.total,

            share:

                totalUnits===0

                ?0

                :(item.total/totalUnits)*100

        }))

        .sort((a,b)=>b.total-a.total);

    // ------------------------------------
    // Grand Total Row
    // ------------------------------------

    const grandTotal={

        brand:"TOTAL",

        PPMP:0,

        SJIT:0,

        SOR:0,

        total:0,

        gmv:0,

        asp:0,

        share:100

    };

    data.forEach(row=>{

        grandTotal.PPMP += row.PPMP;

        grandTotal.SJIT += row.SJIT;

        grandTotal.SOR += row.SOR;

        grandTotal.total += row.total;

        grandTotal.gmv += row.gmv;

    });

    grandTotal.asp =

        grandTotal.total===0

        ?0

        :grandTotal.gmv/grandTotal.total;

    data.push(grandTotal);

    return data;

}