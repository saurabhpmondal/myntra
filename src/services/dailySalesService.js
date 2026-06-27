/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Daily Sales Service
 * Version : V1.0
 * =====================================================
 */

import { getFilteredSales } from "./filterService.js";

export function getDailySales(){

    const rows = getFilteredSales();

    const summary = {};

    rows.forEach(row=>{

        const day = Number(row.date);

        if(!summary[day]){

            summary[day]={

                date:day,

                total:0,

                gmv:0,

                PPMP:0,

                SJIT:0,

                SOR:0

            };

        }

        const qty = Number(row.qty || 0);

        const gmv = Number(row.final_amount || 0);

        summary[day].total += qty;

        summary[day].gmv += gmv;

        // -----------------------
        // PO Type
        // -----------------------

        const po = String(row.po_type || "").toUpperCase();

        if(summary[day][po] !== undefined){

            summary[day][po] += qty;

        }

        // -----------------------
        // Brand
        // -----------------------

        const brand = String(row.brand || "").toUpperCase();

        if(!summary[day][brand]){

            summary[day][brand] = 0;

        }

        summary[day][brand] += qty;

    });

    const data = Object.values(summary)

        .sort((a,b)=>a.date-b.date);

    // -----------------------------------
    // Grand Total Row
    // -----------------------------------

    const total={

        date:"TOTAL",

        total:0,

        gmv:0,

        PPMP:0,

        SJIT:0,

        SOR:0

    };

    data.forEach(day=>{

        total.total += day.total;

        total.gmv += day.gmv;

        total.PPMP += day.PPMP;

        total.SJIT += day.SJIT;

        total.SOR += day.SOR;

        Object.keys(day).forEach(key=>{

            if(

                [

                    "date",

                    "total",

                    "gmv",

                    "PPMP",

                    "SJIT",

                    "SOR"

                ].includes(key)

            ){

                return;

            }

            if(!total[key]){

                total[key]=0;

            }

            total[key]+=day[key];

        });

    });

    data.push(total);

    return data;

}