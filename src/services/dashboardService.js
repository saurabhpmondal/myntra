/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Service
 * =====================================================
 */

import { DataStore } from "./dataService.js";

export function getDashboardSummary() {

    const sales = DataStore.sales;

    if (!sales || sales.length === 0) {

        return {

            revenue: 0,
            unitsSold: 0,
            avgSellingPrice: 0,
            soldStyles: 0

        };

    }

    // -------------------------------------
    // Find Latest Month
    // -------------------------------------

    const latestMonth = sales
        .map(r => r.month)
        .filter(Boolean)
        .sort()
        .pop();

    const currentSales = sales.filter(
        r => r.month === latestMonth
    );

    // -------------------------------------
    // Revenue
    // -------------------------------------

    const revenue = currentSales.reduce((sum, row) => {

        return sum + Number(row.final_amount || 0);

    }, 0);

    // -------------------------------------
    // Units Sold
    // -------------------------------------

    const unitsSold = currentSales.reduce((sum, row) => {

        return sum + Number(row.qty || 0);

    }, 0);

    // -------------------------------------
    // Sold Styles
    // -------------------------------------

    const soldStyles = new Set(

        currentSales.map(r => r.style_id)

    ).size;

    // -------------------------------------
    // ASP
    // -------------------------------------

    const avgSellingPrice =

        unitsSold === 0

            ? 0

            : revenue / unitsSold;

    return {

        month: latestMonth,

        revenue,

        unitsSold,

        avgSellingPrice,

        soldStyles

    };

}