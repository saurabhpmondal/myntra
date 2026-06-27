/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Revenue Trend Service
 * Version : V1.0
 * =====================================================
 */

import { getFilteredSales } from "./filterService.js";
import { getPeriodKey } from "./periodService.js";

const MONTHS = {

    JAN:1,
    FEB:2,
    MAR:3,
    APR:4,
    MAY:5,
    JUNE:6,
    JULY:7,
    AUG:8,
    SEP:9,
    OCT:10,
    NOV:11,
    DEC:12

};

export function getRevenueTrendData(){

    const rows = getFilteredSales();

    const summary = {};

    rows.forEach(row=>{

        const key = getPeriodKey(
            row.month,
            row.year
        );

        if(!summary[key]){

            summary[key]={

                period:key,

                label:`${row.month} ${row.year}`,

                revenue:0,

                units:0

            };

        }

        summary[key].revenue+=
            Number(row.final_amount||0);

        summary[key].units+=
            Number(row.qty||0);

    });

    return Object.values(summary)

        .sort((a,b)=>a.period-b.period);

}