/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Service
 * Version : V1.0
 * =====================================================
 */

import {

    buildLaunchDataset

}

from "./launchBuilder.js";

import {

    NewLaunchStore,

    resetNewLaunchStore

}

from "./newLaunchStore.js";

import {

    buildKPIs

}

from "../calculations/buildKPIs.js";

import {

    buildInsights

}

from "../calculations/buildInsights.js";

import {

    buildLaunchPerformance

}

from "../calculations/buildLaunchPerformance.js";

import {

    buildLaunchAgeAnalysis

}

from "../calculations/buildLaunchAgeAnalysis.js";

import {

    buildWeeklyLaunch

}

from "../calculations/buildWeeklyLaunch.js";

import {

    buildDeadLaunch

}

from "../calculations/buildDeadLaunch.js";

import {

    renderLayout

}

from "../renderers/renderLayout.js";

import {

    renderHeader

}

from "../renderers/renderHeader.js";

import {

    renderKPIs

}

from "../renderers/renderKPIs.js";

import {

    renderInsights

}

from "../renderers/renderInsights.js";

import {

    renderLaunchPerformance

}

from "../renderers/renderLaunchPerformance.js";

import {

    renderLaunchAgeAnalysis

}

from "../renderers/renderLaunchAgeAnalysis.js";

import {

    renderWeeklyLaunch

}

from "../renderers/renderWeeklyLaunch.js";

import {

    renderDeadLaunch

}

from "../renderers/renderDeadLaunch.js";

/**
 * =====================================================
 * Initialize
 * =====================================================
 */

export async function initializeNewLaunch(

    target

){

    resetNewLaunchStore();

    /**
     * ==========================================
     * Layout
     * ==========================================
     */

    await renderLayout(

        target

    );

    /**
     * ==========================================
     * Dataset
     * ==========================================
     */

    const launchRows=

        buildLaunchDataset(

            NewLaunchStore

            .filters

            .launchWindow

        );

    NewLaunchStore.launchRows=

        launchRows;

    NewLaunchStore.filteredRows=[

        ...launchRows

    ];

    /**
     * ==========================================
     * KPI
     * ==========================================
     */

    NewLaunchStore.kpis=

        buildKPIs(

            launchRows

        );

    /**
     * ==========================================
     * Insights
     * ==========================================
     */

    NewLaunchStore.insights=

        buildInsights(

            launchRows,

            NewLaunchStore.kpis

        );

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    NewLaunchStore.launchPerformance=

        buildLaunchPerformance(

            launchRows

        );

    NewLaunchStore.launchAgeAnalysis=

        buildLaunchAgeAnalysis(

            launchRows

        );

    NewLaunchStore.weeklyPerformance=

        buildWeeklyLaunch(

            launchRows

        );

    NewLaunchStore.deadLaunches=

        buildDeadLaunch(

            launchRows

        );

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    NewLaunchStore.loaded=true;

    NewLaunchStore.generatedOn=

        new Date();

    /**
     * ==========================================
     * Render
     * ==========================================
     */

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