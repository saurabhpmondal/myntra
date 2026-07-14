/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V12.0
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { filterData } from "../engines/filterData.js";

import { buildLookup } from "../engines/buildLookup.js";

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function refreshDashboard(){

    SalesReturnStore.loading = true;

    /**
     * ==========================================
     * Reset Working Data
     * ==========================================
     */

    SalesReturnStore.sales = [];

    SalesReturnStore.returns = [];

    SalesReturnStore.lookup = {};

    /**
     * ==========================================
     * Apply Global Filters
     * ==========================================
     */

    const {

        sales,

        returns

    } = filterData();

    /**
     * ==========================================
     * Save Filtered Dataset
     * ==========================================
     */

    SalesReturnStore.sales = sales;

    SalesReturnStore.returns = returns;

    /**
     * ==========================================
     * Build Order Lookup
     * ==========================================
     */

    SalesReturnStore.lookup = buildLookup(

        SalesReturnStore.sales

    );

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    SalesReturnStore.loading = false;

    SalesReturnStore.loaded = true;

    SalesReturnStore.generatedOn = new Date();

    SalesReturnStore.ui.lastRefresh = new Date();

    /**
     * ==========================================
     * Debug
     * ==========================================
     */

    console.group("Sales & Return");

    console.log(

        "Sales Rows :",

        SalesReturnStore.sales.length

    );

    console.log(

        "Return Rows :",

        SalesReturnStore.returns.length

    );

    console.log(

        "Lookup :",

        Object.keys(

            SalesReturnStore.lookup

        ).length

    );

    console.groupEnd();

}