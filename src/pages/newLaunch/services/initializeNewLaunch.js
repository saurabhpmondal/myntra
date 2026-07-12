/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Initialize New Launch
 * Version : V1.0
 * =====================================================
 */

import {

    renderLayout

}

from "../renderers/renderLayout.js";

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

    refreshDashboard

}

from "./refreshDashboard.js";

import {

    bindFilters

}

from "./bindFilters.js";

export async function initializeNewLaunch(

    target

){

    resetNewLaunchStore();

    await renderLayout(

        target

    );

    NewLaunchStore.launchRows=

        buildLaunchDataset(

            NewLaunchStore

            .filters

            .launchWindow

        );

    NewLaunchStore.filteredRows=[

        ...NewLaunchStore.launchRows

    ];

    NewLaunchStore.loaded=true;

    NewLaunchStore.generatedOn=

        new Date();

    await refreshDashboard();

    bindFilters();

}