/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Service
 * Version : V1.0
 * =====================================================
 */

import { renderHeader } from "../renderers/renderHeader.js";

import { renderFilters } from "../renderers/renderFilters.js";

import { renderKPIs } from "../renderers/renderKPIs.js";

import { renderTable } from "../renderers/renderTable.js";

/**
 * =====================================================
 * Initialize Demand Index
 * =====================================================
 */

export async function initializeDemandIndex(

    target

){

    try{

        showLoader();

        /**
         * ==========================================
         * Hide Global Controls
         * ==========================================
         */

        toggleGlobalControls(

            false

        );

        /**
         * ==========================================
         * Header
         * ==========================================
         */

        await renderHeader(

            document.getElementById(

                "demandHeader"

            )

        );

        /**
         * ==========================================
         * Filters
         * ==========================================
         */

        await renderFilters(

            document.getElementById(

                "demandFilters"

            )

        );

        /**
         * ==========================================
         * KPI Cards
         * ==========================================
         */

        await renderKPIs(

            document.getElementById(

                "demandKPIs"

            )

        );

        /**
         * ==========================================
         * Demand Table
         * ==========================================
         */

        await renderTable(

            document.getElementById(

                "demandTable"

            )

        );

    }

    catch(error){

        console.error(

            "Demand Index",

            error

        );

    }

    finally{

        hideLoader();

    }

}

/**
 * =====================================================
 * Loader
 * =====================================================
 */

function showLoader(){

    const loader =

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display="flex";

    }

}

function hideLoader(){

    const loader =

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display="none";

    }

}

/**
 * =====================================================
 * Global Header Controls
 * =====================================================
 */

function toggleGlobalControls(

    visible

){

    /**
     * TODO
     *
     * Use existing Phoenix
     * show / hide utility.
     *
     * We will connect this
     * after Demand Index UI
     * is completed.
     */

    console.log(

        "Global Controls:",

        visible

    );

}