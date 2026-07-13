/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Load Sales & Return
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "./store/salesReturnStore.js";

import {

    applyFilters

}

from "./filters/applyFilters.js";

import {

    renderFilters

}

from "./filters/renderFilters.js";

import {

    initializeSearch

}

from "./filters/searchEngine.js";

import {

    refreshDashboard

}

from "./store/refreshDashboard.js";

/**
 * =====================================================
 * Load Sales & Return
 * =====================================================
 */

export async function loadSalesReturn(

    salesRows=[],

    returnRows=[]

){

    /**
     * Store Data
     */

    SalesReturnStore.salesRows=

        salesRows;

    SalesReturnStore.returnRows=

        returnRows;

    /**
     * Initialize Filters
     */

    renderFilters();

    initializeSearch();

    /**
     * Apply Default Filters
     */

    applyFilters();

    /**
     * Load Dashboard
     */

    await refreshDashboard();

}