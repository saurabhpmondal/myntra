/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Render Filters
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../store/salesReturnStore.js";

import {

    applyFilters

}

from "./applyFilters.js";

import {

    refreshDashboard

}

from "../store/refreshDashboard.js";

/**
 * =====================================================
 * Initialize Filters
 * =====================================================
 */

export function renderFilters(){

    bindMonthFilter();

    bindBrandFilter();

    bindPOTypeFilter();

    bindStyleSearch();

}

/**
 * =====================================================
 * Month Filter
 * =====================================================
 */

function bindMonthFilter(){

    const element=

        document.getElementById(

            "salesReturnMonthFilter"

        );

    if(

        !element

    ){

        return;

    }

    element.onchange=

        async()=>{

            SalesReturnStore.filters.saleMonth=

                getMultiSelectValues(

                    element

                );

            await refresh();

        };

}

/**
 * =====================================================
 * Brand Filter
 * =====================================================
 */

function bindBrandFilter(){

    const element=

        document.getElementById(

            "salesReturnBrandFilter"

        );

    if(

        !element

    ){

        return;

    }

    element.onchange=

        async()=>{

            SalesReturnStore.filters.brand=

                getMultiSelectValues(

                    element

                );

            await refresh();

        };

}

/**
 * =====================================================
 * PO Type Filter
 * =====================================================
 */

function bindPOTypeFilter(){

    const element=

        document.getElementById(

            "salesReturnPOTypeFilter"

        );

    if(

        !element

    ){

        return;

    }

    element.onchange=

        async()=>{

            SalesReturnStore.filters.poType=

                getMultiSelectValues(

                    element

                );

            await refresh();

        };

}

/**
 * =====================================================
 * Style Search
 * =====================================================
 */

function bindStyleSearch(){

    const element=

        document.getElementById(

            "salesReturnStyleSearch"

        );

    if(

        !element

    ){

        return;

    }

    let timer;

    element.oninput=()=>{

        clearTimeout(

            timer

        );

        timer=

            setTimeout(

                async()=>{

                    SalesReturnStore.filters.styleSearch=

                        element.value.trim();

                    await refresh();

                },

                300

            );

    };

}

/**
 * =====================================================
 * Refresh
 * =====================================================
 */

async function refresh(){

    applyFilters();

    await refreshDashboard();

}

/**
 * =====================================================
 * Multi Select
 * =====================================================
 */

function getMultiSelectValues(

    element

){

    return Array.from(

        element.selectedOptions

    ).map(

        option=>

            option.value

    );

}