/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Load Sales & Return
 * Version : V2.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "./store/salesReturnStore.js";

import {

    initializeDashboard

}

from "./dashboard/dashboard.js";

import {

    applyFilters

}

from "./filters/applyFilters.js";

import {

    refreshDashboard

}

from "./store/refreshDashboard.js";

/**
 * =====================================================
 * Load Sales & Return Module
 * =====================================================
 */

export async function loadSalesReturn(

    salesRows=[],

    returnRows=[]

){

    SalesReturnStore.loading=true;

    /**
     * =============================================
     * Load Raw Data
     * =============================================
     */

    SalesReturnStore.salesRows=

        Array.isArray(

            salesRows

        )

        ?

        salesRows

        :

        [];

    SalesReturnStore.returnRows=

        Array.isArray(

            returnRows

        )

        ?

        returnRows

        :

        [];

    /**
     * =============================================
     * Apply Filters
     * =============================================
     */

    applyFilters();

    /**
     * =============================================
     * Initialize Dashboard
     * =============================================
     */

    await initializeDashboard();

    /**
     * =============================================
     * Refresh Dashboard
     * =============================================
     */

    await refreshDashboard();

    /**
     * =============================================
     * Update UI State
     * =============================================
     */

    SalesReturnStore.loading=false;

    SalesReturnStore.ui.lastRefresh=

        new Date();

}