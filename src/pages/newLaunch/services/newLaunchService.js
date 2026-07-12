/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Service
 * Version : V1.3
 * =====================================================
 */

import { buildLaunchDataset } from "./launchBuilder.js";

import {

    NewLaunchStore,

    resetNewLaunchStore

}

from "./newLaunchStore.js";

import { buildKPIs } from "../calculations/buildKPIs.js";

import { buildInsights } from "../calculations/buildInsights.js";

import { buildLaunchPerformance } from "../calculations/buildLaunchPerformance.js";

import { buildLaunchAgeAnalysis } from "../calculations/buildLaunchAgeAnalysis.js";

import { buildWeeklyLaunch } from "../calculations/buildWeeklyLaunch.js";

import { buildDeadLaunch } from "../calculations/buildDeadLaunch.js";

import { renderLayout } from "../renderers/renderLayout.js";

import { renderHeader } from "../renderers/renderHeader.js";

import { renderKPIs } from "../renderers/renderKPIs.js";

import { renderInsights } from "../renderers/renderInsights.js";

import { renderLaunchPerformance } from "../renderers/renderLaunchPerformance.js";

import { renderLaunchAgeAnalysis } from "../renderers/renderLaunchAgeAnalysis.js";

import { renderWeeklyLaunch } from "../renderers/renderWeeklyLaunch.js";

import { renderDeadLaunch } from "../renderers/renderDeadLaunch.js";

let debounceTimer=null;

/**
 * =====================================================
 * Initialize
 * =====================================================
 */

export async function initializeNewLaunch(

    target

){

    resetNewLaunchStore();

    await renderLayout(

        target

    );

    NewLaunchStore.launchRows=

        buildLaunchDataset(

            NewLaunchStore.filters.launchWindow

        );

    NewLaunchStore.filteredRows=[

        ...NewLaunchStore.launchRows

    ];

    NewLaunchStore.loaded=true;

    NewLaunchStore.generatedOn=

        new Date();

    /**
     * Render first.
     * Header creates filter controls.
     */

    await refreshScreen();

    /**
     * Controls now exist.
     */

    bindFilters();

}

/**
 * =====================================================
 * Refresh Screen
 * =====================================================
 */

async function refreshScreen(){

    NewLaunchStore.kpis=

        buildKPIs(

            NewLaunchStore.filteredRows

        );

    NewLaunchStore.insights=

        buildInsights(

            NewLaunchStore.filteredRows,

            NewLaunchStore.kpis

        );

    NewLaunchStore.launchPerformance=

        buildLaunchPerformance(

            NewLaunchStore.filteredRows

        );

    NewLaunchStore.launchAgeAnalysis=

        buildLaunchAgeAnalysis(

            NewLaunchStore.filteredRows

        );

    NewLaunchStore.weeklyPerformance=

        buildWeeklyLaunch(

            NewLaunchStore.filteredRows

        );

    NewLaunchStore.deadLaunches=

        buildDeadLaunch(

            NewLaunchStore.filteredRows

        );

    await renderHeader(

        document.getElementById(

            "newLaunchHeader"

        ),

        NewLaunchStore

    );

    await renderKPIs(

        document.getElementById(

            "newLaunchKPIs"

        ),

        NewLaunchStore.kpis

    );

    await renderInsights(

        document.getElementById(

            "newLaunchInsights"

        ),

        NewLaunchStore.insights

    );

    await renderLaunchPerformance(

        document.getElementById(

            "newLaunchPerformance"

        ),

        NewLaunchStore.launchPerformance

    );

    await renderLaunchAgeAnalysis(

        document.getElementById(

            "newLaunchAgeAnalysis"

        ),

        NewLaunchStore.launchAgeAnalysis

    );

    await renderWeeklyLaunch(

        document.getElementById(

            "newLaunchWeekly"

        ),

        NewLaunchStore.weeklyPerformance

    );

    await renderDeadLaunch(

        document.getElementById(

            "newLaunchDead"

        ),

        NewLaunchStore.deadLaunches

    );

}

/**
 * =====================================================
 * Bind Filters
 * =====================================================
 */

function bindFilters(){

    const launchWindow=

        document.getElementById(

            "nlLaunchWindow"

        );

    const brand=

        document.getElementById(

            "nlBrand"

        );

    const status=

        document.getElementById(

            "nlStatus"

        );

    const search=

        document.getElementById(

            "nlSearch"

        );

    if(

        !launchWindow ||

        !brand ||

        !status ||

        !search

    ){

        return;

    }

    launchWindow.onchange=()=>{

        NewLaunchStore.filters.launchWindow=

            Number(

                launchWindow.value

            );

        applyFilters();

    };

    brand.onchange=()=>{

        NewLaunchStore.filters.brand=

            brand.value;

        applyFilters();

    };

    status.onchange=()=>{

        NewLaunchStore.filters.status=

            status.value;

        applyFilters();

    };

    search.oninput=()=>{

        clearTimeout(

            debounceTimer

        );

        debounceTimer=

            setTimeout(

                ()=>{

                    NewLaunchStore.filters.search=

                        search.value

                        .trim()

                        .toLowerCase();

                    applyFilters();

                },

                300

            );

    };

}

/**
 * =====================================================
 * Apply Filters
 * =====================================================
 */

async function applyFilters(){

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

    await refreshScreen();

}

/**
 * =====================================================
 * Refresh Current Page
 * =====================================================
 */

export async function refreshNewLaunch(){

    await applyFilters();

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroyNewLaunch(){

    clearTimeout(

        debounceTimer

    );

    debounceTimer=null;

}