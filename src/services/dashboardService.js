/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Service
 * Version : V1.3
 * =====================================================
 */

import {
    getComparisonData,
    calculateGrowth
} from "./comparisonService.js";

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

    if(!period){

        return "-";

    }

    const year = Math.floor(period / 100);

    const month = period % 100;

    return `${MONTHS[month]} ${year}`;

}

function summarize(rows){

    let revenue = 0;

    let units = 0;

    const styles = new Set();

    rows.forEach(row=>{

        revenue += Number(row.final_amount || 0);

        units += Number(row.qty || 0);

        if(row.style_id){

            styles.add(row.style_id);

        }

    });

    return{

        revenue,

        units,

        asp: units===0 ? 0 : revenue/units,

        styles: styles.size

    };

}

export function getDashboardSummary(){

    const {

        currentPeriod,

        previousPeriod,

        currentSales,

        previousSales

    } = getComparisonData();

    const current = summarize(currentSales);

    const previous = summarize(previousSales);

    return{

        period: currentPeriod,

        periodLabel: getPeriodLabel(currentPeriod),

        previousPeriod,

        previousPeriodLabel: getPeriodLabel(previousPeriod),

        revenue: current.revenue,

        revenueGrowth: calculateGrowth(

            current.revenue,

            previous.revenue

        ),

        unitsSold: current.units,

        unitsGrowth: calculateGrowth(

            current.units,

            previous.units

        ),

        avgSellingPrice: current.asp,

        aspGrowth: calculateGrowth(

            current.asp,

            previous.asp

        ),

        soldStyles: current.styles,

        soldStylesGrowth: calculateGrowth(

            current.styles,

            previous.styles

        )

    };

}