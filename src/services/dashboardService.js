/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Service
 * Version : V2.0
 * =====================================================
 */

import {
    getComparisonData,
    calculateGrowth
} from "./comparisonService.js";

import { projectMetric } from "./projectionService.js";

const MONTHS = {
    1:"JAN",
    2:"FEB",
    3:"MAR",
    4:"APR",
    5:"MAY",
    6:"JUNE",
    7:"JULY",
    8:"AUG",
    9:"SEP",
    10:"OCT",
    11:"NOV",
    12:"DEC"
};

function getPeriodLabel(period){

    if(!period) return "-";

    const year=Math.floor(period/100);

    const month=period%100;

    return `${MONTHS[month]} ${year}`;

}

function calculateSummary(rows){

    let revenue=0;

    let units=0;

    const styles=new Set();

    rows.forEach(row=>{

        revenue+=Number(row.final_amount||0);

        units+=Number(row.qty||0);

        if(row.style_id){

            styles.add(row.style_id);

        }

    });

    return{

        revenue,

        units,

        asp:units===0?0:revenue/units,

        soldStyles:styles.size

    };

}

export function getDashboardSummary(){

    const{

        currentPeriod,

        previousPeriod,

        currentSales,

        previousSales

    }=getComparisonData();

    const current=calculateSummary(currentSales);

    const previous=calculateSummary(previousSales);

    // Projection

    const projectedRevenue=

        projectMetric(currentSales,"final_amount");

    const projectedUnits=

        projectMetric(currentSales,"qty");

    return{

        period:currentPeriod,

        periodLabel:getPeriodLabel(currentPeriod),

        previousPeriod,

        previousPeriodLabel:getPeriodLabel(previousPeriod),

        // Revenue

        revenue:projectedRevenue.projected,

        revenueActual:projectedRevenue.actual,

        revenueProjected:

            projectedRevenue.projectedMode,

        revenueGrowth:

            calculateGrowth(

                projectedRevenue.projected,

                previous.revenue

            ),

        // Units

        unitsSold:

            projectedUnits.projected,

        unitsActual:

            projectedUnits.actual,

        unitsProjected:

            projectedUnits.projectedMode,

        unitsGrowth:

            calculateGrowth(

                projectedUnits.projected,

                previous.units

            ),

        // ASP (Actual)

        avgSellingPrice:

            current.asp,

        aspGrowth:

            calculateGrowth(

                current.asp,

                previous.asp

            ),

        // Sold Styles (Actual)

        soldStyles:

            current.soldStyles,

        soldStylesGrowth:

            calculateGrowth(

                current.soldStyles,

                previous.soldStyles

            )

    };

}