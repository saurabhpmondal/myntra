/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Executive Filter Bar
 * Version : V1.4
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
    getPeriodKey,
    getPeriodLabel
} from "../../services/periodService.js";

import { refreshCurrentPage } from "../../app/pageManager.js";

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

/* =====================================
   Helpers
===================================== */

function $(id){

    return filterRoot.querySelector(`#${id}`);

}

/* =====================================
   Period
===================================== */

function buildPeriodList(){

    const select = $("filter-period");

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

            const option = document.createElement("option");

            option.value = key;

            option.textContent = label;

            select.appendChild(option);

        });

}

/* =====================================
   Dropdowns
===================================== */

function buildSelect(id,list){

    const select = $(id);

    select.innerHTML = "";

    const option = document.createElement("option");

    option.value = "All";

    option.textContent = "All";

    select.appendChild(option);

    [...list]
        .sort()
        .forEach(item=>{

            const option = document.createElement("option");

            option.value = item;

            option.textContent = item;

            select.appendChild(option);

        });

}

/* =====================================
   Sync UI
===================================== */

function syncUI(){

    $("filter-period").value = FilterState.period;

    $("filter-brand").value = FilterState.brand;

    $("filter-category").value = FilterState.category;

    $("filter-status").value = FilterState.erpStatus;

    $("filter-search").value = FilterState.search;

}

/* =====================================
   Events
===================================== */

function bindEvents(){

    $("applyFilters").onclick = async ()=>{

        updateFilters({

            period:Number(

                $("filter-period").value

            ),

            brand:

                $("filter-brand").value,

            category:

                $("filter-category").value,

            erpStatus:

                $("filter-status").value,

            search:

                $("filter-search")

                    .value

                    .trim()

        });

        await refreshCurrentPage();

    };

    $("resetFilters").onclick = async ()=>{

        resetFilters();

        syncUI();

        await refreshCurrentPage();

    };

}