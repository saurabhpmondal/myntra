/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Initialize Sales & Return
 * Version : V2.0
 * =====================================================
 */

import {

    resetSalesReturnStore,

    SalesReturnStore

}

from "../store/salesReturnStore.js";

import {

    renderLayout

}

from "../renderers/renderLayout.js";

import {

    applyFilters

}

from "../filters/applyFilters.js";

import {

    refreshDashboard

}

from "../store/refreshDashboard.js";

import {

    renderFilters

}

from "../filters/renderFilters.js";

/**
 * =====================================================
 * Initialize
 * =====================================================
 */

export async function initializeSalesReturn(

    container

){

    /**
     * ==========================================
     * Reset
     * ==========================================
     */

    resetSalesReturnStore();

    /**
     * ==========================================
     * Layout
     * ==========================================
     */

    await renderLayout(

        container

    );

    /**
     * ==========================================
     * IMPORTANT
     * Keep previously loaded data after reset
     * ==========================================
     */

    SalesReturnStore.filteredSalesRows=[

        ...SalesReturnStore.salesRows

    ];

    SalesReturnStore.filteredReturnRows=[

        ...SalesReturnStore.returnRows

    ];

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    SalesReturnStore.loaded=true;

    SalesReturnStore.generatedOn=

        new Date();

    /**
     * ==========================================
     * Apply Default Filters
     * ==========================================
     */

    applyFilters();

    /**
     * ==========================================
     * Refresh Dashboard
     * ==========================================
     */

    await refreshDashboard();

    /**
     * ==========================================
     * Bind Filters
     * ==========================================
     */

    renderFilters();

}