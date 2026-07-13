/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../store/salesReturnStore.js";

/**
 * =====================================================
 * Apply Filters
 * =====================================================
 */

export function applyFilters(){

    const{

        salesRows,

        filters

    }=

    SalesReturnStore;

    SalesReturnStore.filteredRows=

        salesRows.filter(

            row=>

                matchMonth(

                    row,

                    filters.saleMonth

                )

                &&

                matchBrand(

                    row,

                    filters.brand

                )

                &&

                matchPOType(

                    row,

                    filters.poType

                )

                &&

                matchStyle(

                    row,

                    filters.styleSearch

                )

        );

}

/**
 * =====================================================
 * Month
 * =====================================================
 */

function matchMonth(

    row,

    values=[]

){

    if(

        !values.length

    ){

        return true;

    }

    return values.includes(

        row.month

    );

}

/**
 * =====================================================
 * Brand
 * =====================================================
 */

function matchBrand(

    row,

    values=[]

){

    if(

        !values.length

    ){

        return true;

    }

    return values.includes(

        row.brand

    );

}

/**
 * =====================================================
 * PO Type
 * =====================================================
 */

function matchPOType(

    row,

    values=[]

){

    if(

        !values.length

    ){

        return true;

    }

    return values.includes(

        row.poType

    );

}

/**
 * =====================================================
 * Style Search
 * =====================================================
 */

function matchStyle(

    row,

    keyword=""

){

    if(

        !keyword

    ){

        return true;

    }

    return String(

        row.styleId

    )

    .toLowerCase()

    .includes(

        keyword

        .toLowerCase()

    );

}