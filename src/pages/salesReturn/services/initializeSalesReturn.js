/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Initialize Sales & Return
 * Version : V3.0
 * =====================================================
 */

import {

    DataStore

}

from "../../../services/dataService.js";

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

    loadSalesReturn

}

from "../loadSalesReturn.js";

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
     * Preserve Loaded Data
     * ==========================================
     */

    const existingSales=

        SalesReturnStore.salesRows;

    const existingReturns=

        SalesReturnStore.returnRows;

    /**
     * ==========================================
     * Reset Store
     * ==========================================
     */

    resetSalesReturnStore();

    /**
     * ==========================================
     * Restore Data
     * ==========================================
     */

    SalesReturnStore.salesRows=

        existingSales.length

        ?

        existingSales

        :

        DataStore.sales;

    SalesReturnStore.returnRows=

        existingReturns.length

        ?

        existingReturns

        :

        DataStore.returns;

    /**
     * ==========================================
     * Render Layout
     * ==========================================
     */

    await renderLayout(

        container

    );

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
     * Load Dashboard
     * ==========================================
     */

    await loadSalesReturn(

        SalesReturnStore.salesRows,

        SalesReturnStore.returnRows

    );

}