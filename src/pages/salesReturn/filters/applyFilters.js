/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V3.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../store/salesReturnStore.js";

import {

    DataStore

}

from "../../../services/dataService.js";

import {

    FilterState,

    getFilteredSales

}

from "../../../services/filterService.js";

import {

    LookupStore

}

from "../../../services/lookupService.js";

import {

    getPeriodKey

}

from "../../../services/periodService.js";

/**
 * =====================================================
 * Apply Filters
 * =====================================================
 */

export function applyFilters(){

    /**
     * ==========================================
     * Sales
     * (Uses Phoenix Global Filter Engine)
     * ==========================================
     */

    SalesReturnStore.filteredSalesRows =

        getFilteredSales();

    /**
     * ==========================================
     * Returns
     * ==========================================
     */

    SalesReturnStore.filteredReturnRows =

        DataStore.returns.filter(

            row=>{

                const product =

                    LookupStore.productMap[

                        row.style_id

                    ];

                if(

                    !product

                ){

                    return false;

                }

                /**
                 * Period
                 */

                if(

                    FilterState.period!==null

                ){

                    const key=

                        getPeriodKey(

                            row.month,

                            row.year

                        );

                    if(

                        key!==FilterState.period

                    ){

                        return false;

                    }

                }

                /**
                 * Brand
                 */

                if(

                    FilterState.brand!=="All"

                    &&

                    product.brand!==FilterState.brand

                ){

                    return false;

                }

                /**
                 * Category
                 */

                if(

                    FilterState.category!=="All"

                    &&

                    product.category!==FilterState.category

                ){

                    return false;

                }

                /**
                 * ERP Status
                 */

                if(

                    FilterState.erpStatus!=="All"

                    &&

                    product.erpStatus!==FilterState.erpStatus

                ){

                    return false;

                }

                /**
                 * Search
                 */

                if(

                    FilterState.search.trim()

                ){

                    const keyword=

                        FilterState.search

                        .trim()

                        .toLowerCase();

                    const matched=

                        String(

                            row.style_id||""

                        )

                        .toLowerCase()

                        .includes(keyword)

                        ||

                        String(

                            product.erpSku||""

                        )

                        .toLowerCase()

                        .includes(keyword);

                    if(

                        !matched

                    ){

                        return false;

                    }

                }

                return true;

            }

        );

}