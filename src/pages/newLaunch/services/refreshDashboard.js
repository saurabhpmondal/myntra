/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V1.0
 * =====================================================
 */

import {

    NewLaunchStore

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

import {

    bindFilters

}

from "./bindFilters.js";

export async function refreshDashboard(){

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

    /**
     * Header gets recreated after every refresh.
     * Rebind filter events.
     */

    bindFilters();

}