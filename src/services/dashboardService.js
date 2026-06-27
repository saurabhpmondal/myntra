/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Service
 * Version : V1.2
 * =====================================================
 */

import { getComparisonData, calculateGrowth } from "./comparisonService.js";

function calculateSummary(rows) {

    let revenue = 0;
    let unitsSold = 0;

    const styles = new Set();

    rows.forEach(row => {

        revenue += Number(row.final_amount || 0);

        unitsSold += Number(row.qty || 0);

        if (row.style_id) {

            styles.add(row.style_id);

        }

    });

    return {

        revenue,

        unitsSold,

        avgSellingPrice:
            unitsSold === 0 ? 0 : revenue / unitsSold,

        soldStyles: styles.size

    };

}

export function getDashboardSummary() {

    const {

        currentPeriod,
        previousPeriod,
        currentSales,
        previousSales

    } = getComparisonData();

    const current = calculateSummary(currentSales);

    const previous = calculateSummary(previousSales);

    return {

        period: currentPeriod,

        previousPeriod,

        revenue: current.revenue,
        previousRevenue: previous.revenue,
        revenueGrowth: calculateGrowth(
            current.revenue,
            previous.revenue
        ),

        unitsSold: current.unitsSold,
        previousUnitsSold: previous.unitsSold,
        unitsGrowth: calculateGrowth(
            current.unitsSold,
            previous.unitsSold
        ),

        avgSellingPrice: current.avgSellingPrice,
        previousAvgSellingPrice: previous.avgSellingPrice,
        aspGrowth: calculateGrowth(
            current.avgSellingPrice,
            previous.avgSellingPrice
        ),

        soldStyles: current.soldStyles,
        previousSoldStyles: previous.soldStyles,
        soldStylesGrowth: calculateGrowth(
            current.soldStyles,
            previous.soldStyles
        )

    };

}