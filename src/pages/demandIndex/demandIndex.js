/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index
 * Version : V7.1
 * =====================================================
 */

import { initializeDemandIndex }
from "./services/demandIndexService.js";

let pageContainer = null;

/**
 * ==========================================
 * Render
 * ==========================================
 */

export async function renderDemandIndex(

    target

){

    pageContainer = target;

    // Hide global filter bar

    const filterBar =

        document.getElementById(

            "filterbar"

        );

    if(

        filterBar

    ){

        filterBar.style.display = "none";

    }

    await initializeDemandIndex(

        pageContainer

    );

}

/**
 * ==========================================
 * Cleanup
 * Called when leaving Demand Index
 * ==========================================
 */

export function destroyDemandIndex(){

    const filterBar =

        document.getElementById(

            "filterbar"

        );

    if(

        filterBar

    ){

        filterBar.style.display = "";

    }

}