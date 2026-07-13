/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return
 * Version : V2.0
 * =====================================================
 */

import {

    initializeDashboard

}

from "./dashboard/dashboard.js";

import {

    destroyDashboard

}

from "./dashboard/dashboard.js";

let pageContainer=null;

/**
 * =====================================================
 * Render
 * =====================================================
 */

export async function renderSalesReturn(

    target

){

    pageContainer=

        target;

    await initializeDashboard(

        pageContainer

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroySalesReturn(){

    destroyDashboard();

    pageContainer=null;

}