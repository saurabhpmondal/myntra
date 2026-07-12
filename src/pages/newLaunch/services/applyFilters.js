/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V1.2
 * =====================================================
 */

import {

    buildLaunchDataset

}

from "./launchBuilder.js";

import {

    NewLaunchStore

}

from "./newLaunchStore.js";

import {

    refreshDashboard

}

from "./refreshDashboard.js";

import {

    bindFilters

}

from "./bindFilters.js";

/**
 * =====================================================
 * Apply Filters
 * =====================================================
 */

export async function applyFilters(){

    /**
     * ==========================================
     * Build Launch Dataset
     * ==========================================
     */

    NewLaunchStore.launchRows=

        buildLaunchDataset(

            NewLaunchStore

            .filters

            .launchWindow

        );

    /**
     * ==========================================
     * Read Filters
     * ==========================================
     */

    const{

        brand,

        status,

        search

    }=

    NewLaunchStore.filters;

    /**
     * ==========================================
     * Apply Filters
     * ==========================================
     */

    NewLaunchStore.filteredRows=

        NewLaunchStore.launchRows.filter(

            row=>{

                if(

                    brand &&

                    row.brand!==brand

                ){

                    return false;

                }

                if(

                    status &&

                    row.status!==status

                ){

                    return false;

                }

                if(

                    search &&

                    !String(

                        row.styleId

                    )

                    .toLowerCase()

                    .includes(

                        search

                    )

                ){

                    return false;

                }

                return true;

            }

        );

    /**
     * ==========================================
     * Update Refresh Time
     * ==========================================
     */

    NewLaunchStore.generatedOn=

        new Date();

    /**
     * ==========================================
     * Refresh Dashboard
     * ==========================================
     */

    await refreshDashboard();

    /**
     * ==========================================
     * Header Recreated
     * Bind Fresh Events
     * ==========================================
     */

    bindFilters();

}