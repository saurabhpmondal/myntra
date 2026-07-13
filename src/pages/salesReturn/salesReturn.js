/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Page
 * Version : V1.0
 * =====================================================
 */

import {

    initializeDashboard

}

from "./dashboard/dashboard.js";

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
 * Render Sales & Return
 * =====================================================
 */

export async function renderSalesReturn(

    container

){

    container.innerHTML=`

<div id="salesReturnPage">

</div>

`;

    const page=

        document.getElementById(

            "salesReturnPage"

        );

    page.innerHTML=`

<div id="salesReturnDashboard"></div>

`;

    await initializeDashboard();

    await loadSalesReturn(

        SalesReturnStore.salesRows,

        SalesReturnStore.returnRows

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroySalesReturn(){

    const page=

        document.getElementById(

            "salesReturnPage"

        );

    if(

        page

    ){

        page.innerHTML="";

    }

}