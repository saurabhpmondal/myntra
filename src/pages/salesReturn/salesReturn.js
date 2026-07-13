/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Intelligence
 * Version : V1.0
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

let pageContainer=null;

/**
 * =====================================================
 * Render
 * =====================================================
 */

export async function renderSalesReturn(

    target

){

    pageContainer=target;

    await initializeSalesReturn(

        pageContainer

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroySalesReturn(){

    destroySalesReturnPage();

    pageContainer=null;

}