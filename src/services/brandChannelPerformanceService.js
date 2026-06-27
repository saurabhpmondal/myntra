/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Brand Channel Performance
 * Version : V1.0
 * =====================================================
 */

import { getFilteredSales } from "./filterService.js";

export function getBrandChannelPerformance(){

    const rows = getFilteredSales();

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

        const po = String(row.po_type || "").toUpperCase();

        if(summary[brand][po] !== undefined){

            summary[brand][po] += qty;

        }

        summary[brand].total += qty;

        summary[brand].gmv += gmv;

        totalUnits += qty;

    });

    return Object.values(summary)

        .map(item=>({

            brand:item.brand,

            PPMP:item.PPMP,

            SJIT:item.SJIT,

            SOR:item.SOR,

            total:item.total,

            share:

                totalUnits===0

                ?0

                :(item.total/totalUnits)*100,

            asp:

                item.total===0

                ?0

                :item.gmv/item.total

        }))

        .sort((a,b)=>b.total-a.total);

}