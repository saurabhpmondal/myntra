/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Dashboard
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../store/salesReturnStore.js";

import {

    renderFilters

}

from "../filters/renderFilters.js";

import {

    initializeSearch

}

from "../filters/searchEngine.js";

import {

    refreshDashboard

}

from "../store/refreshDashboard.js";

import {

    exportSalesReturn

}

from "../export/exportSalesReturn.js";

/**
 * =====================================================
 * Initialize Dashboard
 * =====================================================
 */

export async function initializeDashboard(){

    if(

        SalesReturnStore.ui.initialized

    ){

        return;

    }

    bindExport();

    renderFilters();

    initializeSearch();

    SalesReturnStore.ui.initialized=true;

    await refreshDashboard();

}

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function reloadDashboard(){

    await refreshDashboard();

}

/**
 * =====================================================
 * Export
 * =====================================================
 */

function bindExport(){

    const button=

        document.getElementById(

            "salesReturnExport"

        );

    if(

        !button

    ){

        return;

    }

    button.onclick=

        ()=>{

            exportSalesReturn();

        };

}