/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Helper
 * Version : V1.0
 * =====================================================
 */

import { getTrendSales } from "../filterService.js";
import { getPeriodKey } from "../periodService.js";

export function getGrowthBaseData(){

    const sales = getTrendSales();

    const periods = [...new Set(

        sales.map(r=>

            getPeriodKey(r.month,r.year)

        )

    )].sort((a,b)=>a-b);

    const currentPeriod = periods[periods.length-1];

    const previousPeriod = periods[periods.length-2];

    const previous2Period = periods[periods.length-3];

    const currentRows = sales.filter(r=>

        getPeriodKey(r.month,r.year)===currentPeriod

    );

    const previousRows = sales.filter(r=>

        getPeriodKey(r.month,r.year)===previousPeriod

    );

    const previous2Rows = sales.filter(r=>

        getPeriodKey(r.month,r.year)===previous2Period

    );

    const styleIds=[

        ...new Set(

            sales.map(r=>String(r.style_id))

        )

    ].sort();

    return{

        sales,

        styleIds,

        currentRows,

        previousRows,

        previous2Rows,

        currentPeriod,

        previousPeriod,

        previous2Period

    };

}

export function sum(rows,column){

    return rows.reduce(

        (t,r)=>

            t+Number(r[column]||0),

        0

    );

}

export function groupByStyle(rows){

    const map={};

    rows.forEach(row=>{

        const id=String(row.style_id);

        if(!map[id]){

            map[id]=[];

        }

        map[id].push(row);

    });

    return map;

}

export function getMonthLabel(rows){

    if(!rows.length){

        return "";

    }

    const row=rows[0];

    return `${capitalize(row.month)}-${String(row.year).slice(2)}`;

}

export function getMaxSaleDay(rows){

    let max=0;

    rows.forEach(r=>{

        const day=Number(r.date||0);

        if(day>max){

            max=day;

        }

    });

    return max;

}

export function getMonthDays(rows){

    if(!rows.length){

        return 30;

    }

    const row=rows[0];

    const monthNo=getMonthNumber(row.month);

    return new Date(

        Number(row.year),

        monthNo,

        0

    ).getDate();

}

export function getMonthNumber(month){

    return{

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

    }[String(month).toUpperCase()]||1;

}

function capitalize(value){

    const text=String(value).toLowerCase();

    return text.charAt(0).toUpperCase()+text.slice(1);

}