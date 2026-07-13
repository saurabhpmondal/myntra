/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Destroy Sales & Return
 * Version : V1.0
 * =====================================================
 */

import {

    resetSalesReturnStore

}

from "../store/salesReturnStore.js";

/**
 * =====================================================
 * Destroy Module
 * =====================================================
 */

export function destroySalesReturnPage(){

    /**
     * Reset Store
     */

    resetSalesReturnStore();

}