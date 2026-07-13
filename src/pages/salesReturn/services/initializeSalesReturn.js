/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Initialize Sales & Return
 * Version : V1.0
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

/**
 * =====================================================
 * Initialize
 * =====================================================
 */

export async function initializeSalesReturn(

    container

){

    /**
     * Reset Store
     */

    resetSalesReturnStore();

    /**
     * Render Layout
     */

    await renderLayout(

        container

    );

    /**
     * Status
     */

    SalesReturnStore.loaded=true;

    SalesReturnStore.generatedOn=

        new Date();

}