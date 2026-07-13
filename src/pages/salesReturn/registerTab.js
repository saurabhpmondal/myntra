/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Register Sales & Return Tab
 * Version : V1.0
 * =====================================================
 */

import {

    loadSalesReturn

}

from "./loadSalesReturn.js";

import {

    SalesReturnStore

}

from "./store/salesReturnStore.js";

/**
 * =====================================================
 * Register Sales & Return
 * =====================================================
 */

export async function registerSalesReturn(){

    const tab=

        document.getElementById(

            "tabSalesReturn"

        );

    if(

        !tab

    ){

        return;

    }

    tab.addEventListener(

        "click",

        async()=>{

            await loadSalesReturn(

                SalesReturnStore.salesRows,

                SalesReturnStore.returnRows

            );

        }

    );

}