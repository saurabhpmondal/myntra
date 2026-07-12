/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V1.1
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

export async function applyFilters(){

    NewLaunchStore.launchRows=

        buildLaunchDataset(

            NewLaunchStore

            .filters

            .launchWindow

        );

    const{

        brand,

        status,

        search

    }=

    NewLaunchStore.filters;

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

    NewLaunchStore.generatedOn=

        new Date();

    await refreshDashboard();

    /**
     * Header recreated.
     * Bind fresh controls.
     */

    bindFilters();

}