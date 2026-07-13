/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Service
 * Version : V1.0
 * =====================================================
 */

import {

    initializeSalesReturn

}

from "./initializeSalesReturn.js";

import {

    destroySalesReturnPage

}

from "./destroySalesReturn.js";

/**
 * =====================================================
 * Initialize Module
 * =====================================================
 */

export async function startSalesReturn(

    container

){

    await initializeSalesReturn(

        container

    );

}

/**
 * =====================================================
 * Destroy Module
 * =====================================================
 */

export function stopSalesReturn(){

    destroySalesReturnPage();

}