/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Prepare Dashboard
 * Version : V13.4
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { filterComparisonData } from "../engines/filterComparisonData.js";

import { buildKPIs } from "../engines/buildKPIs.js";

import { buildPreviousKPIs } from "../engines/buildPreviousKPIs.js";

import { buildGrowthKPIs } from "../engines/buildGrowthKPIs.js";

export async function prepareDashboard() {

    /**
     * ==========================================
     * Comparison Dataset
     * ==========================================
     */

    const comparison = filterComparisonData();

    /**
     * ==========================================
     * Current Dataset
     * ==========================================
     */

    SalesReturnStore.sales = comparison.current.sales;

    SalesReturnStore.returns = comparison.current.returns;

    SalesReturnStore.lookup = comparison.current.lookup;

    /**
     * ==========================================
     * Current KPI
     * ==========================================
     */

    SalesReturnStore.currentDashboard = buildKPIs(

        comparison.current.sales,

        comparison.current.returns,

        comparison.current.lookup

    );

    /**
     * ==========================================
     * Previous KPI
     * ==========================================
     */

    SalesReturnStore.previousDashboard = buildPreviousKPIs(

        comparison.previous.sales,

        comparison.previous.returns,

        comparison.previous.lookup

    );

    /**
     * ==========================================
     * Growth KPI
     * ==========================================
     */

    SalesReturnStore.dashboard = buildGrowthKPIs(

        SalesReturnStore.currentDashboard,

        SalesReturnStore.previousDashboard,

        comparison.compareLabel

    );

    return comparison;
}