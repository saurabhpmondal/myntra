/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Comparison Service
 * =====================================================
 */

import { getFilteredSales, FilterState } from "./filterService.js";
import { getPeriodKey } from "./periodService.js";

export function getPreviousPeriod(periodKey){

    let year = Math.floor(periodKey / 100);

    let month = periodKey % 100;

    month--;

    if(month === 0){

        month = 12;

        year--;

    }

    return year * 100 + month;

}

export function getComparisonData(){

    const currentPeriod = FilterState.period;

    const previousPeriod = getPreviousPeriod(currentPeriod);

    const current = getFilteredSales();

    const previous = current.filter(()=>false);

    return {

        currentPeriod,

        previousPeriod,

        current,

        previous

    };

}