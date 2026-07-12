/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V1.0
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

export async function applyFilters(){

    /**
     * ==========================================
     * Rebuild Launch Dataset
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
     * Filter Dataset
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
     * Update Time
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

}