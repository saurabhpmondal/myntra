/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Service
 * Version : V1.1
 * =====================================================
 */

import { getFilteredSales } from "./filterService.js";
import { FilterState } from "./filterService.js";

export function getDashboardSummary() {

    const sales = getFilteredSales();

    let revenue = 0;
    let unitsSold = 0;

    const styleSet = new Set();

    sales.forEach(row => {

        revenue += Number(row.final_amount || 0);

        unitsSold += Number(row.qty || 0);

        if (row.style_id) {

            styleSet.add(row.style_id);

        }

    });

    return {

        revenue,

        unitsSold,

        avgSellingPrice:
            unitsSold === 0
                ? 0
                : revenue / unitsSold,

        soldStyles: styleSet.size,

        totalRows: sales.length,

        period: FilterState.period,

        brand: FilterState.brand,

        category: FilterState.category,

        erpStatus: FilterState.erpStatus

    };

}