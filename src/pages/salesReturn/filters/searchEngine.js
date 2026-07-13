/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Search Engine
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
 * Initialize Search
 * =====================================================
 */

export function initializeSearch(){

    const search=

        document.getElementById(

            "salesReturnStyleSearch"

        );

    if(

        !search

    ){

        return;

    }

    let debounceTimer=null;

    search.addEventListener(

        "input",

        ()=>{

            clearTimeout(

                debounceTimer

            );

            debounceTimer=

                setTimeout(

                    async()=>{

                        SalesReturnStore.filters.styleSearch=

                            search.value

                            .trim();

                        applyFilters();

                        await refreshDashboard();

                    },

                    300

                );

        }

    );

}

/**
 * =====================================================
 * Clear Search
 * =====================================================
 */

export async function clearSearch(){

    const search=

        document.getElementById(

            "salesReturnStyleSearch"

        );

    if(

        search

    ){

        search.value="";

    }

    SalesReturnStore.filters.styleSearch="";

    applyFilters();

    await refreshDashboard();

}