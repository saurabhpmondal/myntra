/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Service
 * Version : V2.0
 * =====================================================
 */

import { buildDemandIndex } from "./demandIndexBuilder.js";

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

        const today=

            new Date();

        const fromDate=

            new Date();

        fromDate.setDate(

            today.getDate()-30

        );

        const rows=

            buildDemandIndex(

                fromDate,

                today

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

            ),

            rows

        );

        /**
         * ==========================================
         * Demand Table
         * ==========================================
         */

        await renderTable(

            document.getElementById(

                "demandTable"

            ),

            rows

        );

        const empty=

            document.getElementById(

                "demandEmpty"

            );

        if(empty){

            empty.style.display=

                rows.length

                ?

                "none"

                :

                "flex";

        }

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

    const loader=

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display=

            "flex";

    }

}

function hideLoader(){

    const loader=

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display=

            "none";

    }

}