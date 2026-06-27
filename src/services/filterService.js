/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Global Filter Service
 * =====================================================
 */

import { DataStore } from "./dataService.js";
import { LookupStore } from "./lookupService.js";

export const FilterState = {

    fromDate: null,
    toDate: null,

    brand: "All",
    category: "All",
    erpStatus: "All"

};

/**
 * Initialize default filters
 */
export function initializeFilters(){

    const dates = DataStore.sales
        .map(row => row.date)
        .filter(Boolean)
        .sort();

    if(dates.length){

        FilterState.fromDate = dates[0];
        FilterState.toDate = dates[dates.length-1];

    }

}

/**
 * Update any filter
 */
export function updateFilters(filters){

    Object.assign(FilterState,filters);

}

/**
 * Return filtered sales
 */
export function getFilteredSales(){

    return DataStore.sales.filter(sale=>{

        const product = LookupStore.productMap[sale.style_id];

        if(!product) return false;

        if(FilterState.brand !== "All"){

            if(product.brand !== FilterState.brand){

                return false;

            }

        }

        if(FilterState.category !== "All"){

            if(product.category !== FilterState.category){

                return false;

            }

        }

        if(FilterState.erpStatus !== "All"){

            if(product.erpStatus !== FilterState.erpStatus){

                return false;

            }

        }

        if(FilterState.fromDate){

            if(sale.date < FilterState.fromDate){

                return false;

            }

        }

        if(FilterState.toDate){

            if(sale.date > FilterState.toDate){

                return false;

            }

        }

        return true;

    });

}