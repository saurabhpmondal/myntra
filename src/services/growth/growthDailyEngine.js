/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Daily Engine
 * Version : V1.0
 * =====================================================
 */

import {
    groupByStyle,
    getMaxSaleDay
} from "./growthHelper.js";

export function buildDailyData(base){

    const currentMap = groupByStyle(base.currentRows);

    const maxDay = getMaxSaleDay(base.currentRows);

    const dayColumns = [];

    for(let day=1;day<=maxDay;day++){

        dayColumns.push({

            key:`day_${day}`,

            label:String(day),

            align:"center",

            format:"number"

        });

    }

    const values = {};

    const colors = {};

    base.styleIds.forEach(styleId=>{

        const rows = currentMap[styleId] || [];

        values[styleId] = {};

        colors[styleId] = {};

        for(let day=1;day<=maxDay;day++){

            const qty = rows

                .filter(r=>Number(r.date)===day)

                .reduce(

                    (t,r)=>t+Number(r.qty||0),

                    0

                );

            values[styleId][`day_${day}`] = qty;

        }

        // ==================================
        // Day on Day Color
        // ==================================

        for(let day=2;day<=maxDay;day++){

            const yesterday =

                values[styleId][`day_${day-1}`] || 0;

            const today =

                values[styleId][`day_${day}`] || 0;

            if(today>yesterday){

                colors[styleId][`day_${day}`] =

                    "text-success";

            }

            else if(today<yesterday){

                colors[styleId][`day_${day}`] =

                    "text-danger";

            }

            else{

                colors[styleId][`day_${day}`] = "";

            }

        }

    });

    return{

        maxDay,

        dayColumns,

        values,

        colors

    };

}

export function getDayValue(

    dailyData,

    styleId,

    day

){

    return (

        dailyData.values[styleId] ||

        {}

    )[

        `day_${day}`

    ] || 0;

}

export function getDayColor(

    dailyData,

    styleId,

    day

){

    return (

        dailyData.colors[styleId] ||

        {}

    )[

        `day_${day}`

    ] || "";

}