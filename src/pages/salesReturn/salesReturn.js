/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return
 * Version : V12.0
 * =====================================================
 */

import {

    initializeSalesReturn

}

from "./services/initializeSalesReturn.js";

import {

    destroySalesReturnPage

}

from "./services/destroySalesReturn.js";

/**
 * =====================================================
 * Render
 * =====================================================
 */

export async function renderSalesReturn(

    container

){

    await initializeSalesReturn(

        container

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroySalesReturn(){

    destroySalesReturnPage();

}