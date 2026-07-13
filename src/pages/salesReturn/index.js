/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return
 * Version : V1.0
 * =====================================================
 */

import {

    loadSalesReturn

}

from "./loadSalesReturn.js";

import {

    registerSalesReturn

}

from "./registerTab.js";

/**
 * =====================================================
 * Initialize Module
 * =====================================================
 */

export async function initializeSalesReturn(

    salesRows=[],

    returnRows=[]

){

    await loadSalesReturn(

        salesRows,

        returnRows

    );

}

/**
 * =====================================================
 * Register Module
 * =====================================================
 */

export function registerSalesReturnModule(){

    registerSalesReturn();

}

/**
 * =====================================================
 * Public API
 * =====================================================
 */

export default{

    initializeSalesReturn,

    registerSalesReturnModule

};