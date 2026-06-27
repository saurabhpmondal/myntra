/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Filter Service
 * Version : V1.1
 * =====================================================
 */

import { DataStore } from "./dataService.js";
import { LookupStore } from "./lookupService.js";
import { getLatestPeriod, getPeriodKey } from "./periodService.js";

export const FilterState = {

    period: null,

    brand: "All",

    category: "All",

    erpStatus: "All",

    search: ""

};

/**
 * Initialize Filters
 */
export function initializeFilters() {

    const latest = getLatestPeriod(DataStore.sales);

    if (latest) {

        FilterState.period = latest.key;

    }

}

/**
 * Update Filters
 */
export function updateFilters(filters) {

    Object.assign(FilterState, filters);

}

/**
 * Reset Filters
 */
export function resetFilters() {

    initializeFilters();

    FilterState.brand = "All";
    FilterState.category = "All";
    FilterState.erpStatus = "All";
    FilterState.search = "";

}

/**
 * Return filtered sales
 */
export function getFilteredSales() {

    return DataStore.sales.filter(sale => {

        const product = LookupStore.productMap[sale.style_id];

        if (!product) return false;

        // Period
        const periodKey = getPeriodKey(sale.month, sale.year);

        if (FilterState.period && periodKey !== FilterState.period) {

            return false;

        }

        // Brand
        if (
            FilterState.brand !== "All" &&
            product.brand !== FilterState.brand
        ) {

            return false;

        }

        // Category
        if (
            FilterState.category !== "All" &&
            product.category !== FilterState.category
        ) {

            return false;

        }

        // ERP Status
        if (
            FilterState.erpStatus !== "All" &&
            product.erpStatus !== FilterState.erpStatus
        ) {

            return false;

        }

        // Search
        if (FilterState.search.trim()) {

            const keyword = FilterState.search.toLowerCase();

            const matched =

                sale.style_id?.toLowerCase().includes(keyword) ||

                product.erpSku?.toLowerCase().includes(keyword);

            if (!matched) {

                return false;

            }

        }

        return true;

    });

}