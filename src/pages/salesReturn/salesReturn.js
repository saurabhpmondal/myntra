/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return
 * Version : V3.0
 * =====================================================
 */

import {

    startSalesReturn,

    stopSalesReturn

}

from "./services/salesReturnService.js";

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

    await startSalesReturn(

        pageContainer

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroySalesReturn(){

    stopSalesReturn();

    pageContainer=null;

}