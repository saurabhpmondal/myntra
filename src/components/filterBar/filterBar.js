/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Executive Filter Bar
 * Version : V1.2
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { LookupStore } from "../../services/lookupService.js";

import {
    FilterState,
    initializeFilters,
    updateFilters,
    resetFilters
} from "../../services/filterService.js";

import { DataStore } from "../../services/dataService.js";

import {
    getLatestPeriod,
    getPeriodKey,
    getPeriodLabel
} from "../../services/periodService.js";

import { refreshDashboard } from "../../pages/dashboard/dashboard.js";

let filterRoot = null;

export async function renderFilterBar(target){

    filterRoot = target;

    await createComponent({

        target,

        html:"src/components/filterBar/filterBar.html",

        css:"src/components/filterBar/filterBar.css"

    });

    initializeFilters();

    buildPeriodList();

    buildSelect(
        "filter-brand",
        LookupStore.brands
    );

    buildSelect(
        "filter-category",
        LookupStore.categories
    );

    buildSelect(
        "filter-status",
        LookupStore.erpStatuses
    );

    syncUI();

    bindEvents();

}

/**
 * -------------------------
 * Build Period Dropdown
 * -------------------------
 */

function buildPeriodList(){

    const select = document.getElementById("filter-period");

    select.innerHTML = "";

    const periods = new Map();

    DataStore.sales.forEach(row=>{

        const key = getPeriodKey(
            row.month,
            row.year
        );

        periods.set(
            key,
            getPeriodLabel(
                row.month,
                row.year
            )
        );

    });

    [...periods.entries()]
        .sort((a,b)=>b[0]-a[0])
        .forEach(([key,label])=>{

            const option=document.createElement("option");

            option.value=key;

            option.textContent=label;

            select.appendChild(option);

        });

}

/**
 * -------------------------
 * Build Dropdown
 * -------------------------
 */

function buildSelect(id,list){

    const select=document.getElementById(id);

    select.innerHTML="";

    const all=document.createElement("option");

    all.value="All";

    all.textContent="All";

    select.appendChild(all);

    [...list]
        .sort()
        .forEach(item=>{

            const option=document.createElement("option");

            option.value=item;

            option.textContent=item;

            select.appendChild(option);

        });

}

/**
 * -------------------------
 * Sync UI with State
 * -------------------------
 */

function syncUI(){

    document.getElementById("filter-period").value =
        FilterState.period;

    document.getElementById("filter-brand").value =
        FilterState.brand;

    document.getElementById("filter-category").value =
        FilterState.category;

    document.getElementById("filter-status").value =
        FilterState.erpStatus;

    document.getElementById("filter-search").value =
        FilterState.search;

}

/**
 * -------------------------
 * Events
 * -------------------------
 */

function bindEvents(){

    document.getElementById("applyFilters").onclick=()=>{

        updateFilters({

            period:Number(
                document.getElementById("filter-period").value
            ),

            brand:
                document.getElementById("filter-brand").value,

            category:
                document.getElementById("filter-category").value,

            erpStatus:
                document.getElementById("filter-status").value,

            search:
                document.getElementById("filter-search")
                    .value
                    .trim()

        });

        refreshDashboard();

    };

    document.getElementById("resetFilters").onclick=()=>{

        resetFilters();

        syncUI();

        refreshDashboard();

    };

}