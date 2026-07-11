/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Service
 * Version : V1.1
 * =====================================================
 */

import { buildLaunchDataset } from "./launchBuilder.js";
import { NewLaunchStore, resetNewLaunchStore } from "./newLaunchStore.js";

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

    bindFilters();

}

/**
 * =====================================================
 * Initialize
 * =====================================================
 */

export async function initializeNewLaunch(target){

    resetNewLaunchStore();

    await renderLayout(target);

    NewLaunchStore.launchRows=
        buildLaunchDataset(30);

    NewLaunchStore.filteredRows=[
        ...NewLaunchStore.launchRows
    ];

    NewLaunchStore.loaded=true;

    NewLaunchStore.generatedOn=
        new Date();

    await refreshScreen();

}

/**
 * =====================================================
 * Bind Filters
 * =====================================================
 */

function bindFilters(){

    document.getElementById(
        "nlLaunchWindow"
    ).onchange=applyFilters;

    document.getElementById(
        "nlBrand"
    ).onchange=applyFilters;

    document.getElementById(
        "nlStatus"
    ).onchange=applyFilters;

    document.getElementById(
        "nlSearch"
    ).oninput=applyFilters;

}

/**
 * =====================================================
 * Apply Filters
 * =====================================================
 */

async function applyFilters(){

    const launchWindow=
        Number(
            document.getElementById(
                "nlLaunchWindow"
            ).value
        );

    const brand=
        document.getElementById(
            "nlBrand"
        ).value;

    const status=
        document.getElementById(
            "nlStatus"
        ).value;

    const keyword=
        document.getElementById(
            "nlSearch"
        )
        .value
        .trim()
        .toLowerCase();

    NewLaunchStore.launchRows=
        buildLaunchDataset(
            launchWindow
        );

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
                    keyword &&
                    !String(
                        row.styleId
                    )
                    .toLowerCase()
                    .includes(
                        keyword
                    )
                ){
                    return false;
                }

                return true;

            }
        );

    await refreshScreen();

}