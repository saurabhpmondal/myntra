/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Comparison Service
 * Version : V1.1
 * =====================================================
 */

import {
    FilterState,
    getSalesByPeriod
} from "./filterService.js";

/**
 * Get Previous Period
 * Example:
 * 202606 -> 202605
 * 202601 -> 202512
 */

export function getPreviousPeriod(periodKey) {

    let year = Math.floor(periodKey / 100);

    let month = periodKey % 100;

    month--;

    if (month === 0) {

        month = 12;
        year--;

    }

    return (year * 100) + month;

}

/**
 * Returns current & previous period sales
 */

export function getComparisonData() {

    const currentPeriod = FilterState.period;

    const previousPeriod = getPreviousPeriod(currentPeriod);

    const currentSales = getSalesByPeriod(currentPeriod);

    const previousSales = getSalesByPeriod(previousPeriod);

    return {

        currentPeriod,

        previousPeriod,

        currentSales,

        previousSales

    };

}

/**
 * Calculate Growth %
 */

export function calculateGrowth(current, previous) {

    if (previous === 0) {

        return 0;

    }

    return ((current - previous) / previous) * 100;

}

/**
 * Format Growth
 */

export function formatGrowth(value) {

    const sign = value >= 0 ? "+" : "";

    return `${sign}${value.toFixed(1)}%`;

}