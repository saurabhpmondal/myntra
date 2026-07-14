/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Apply Filters
 * Version : V2.0
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

    const filters=

        SalesReturnStore.filters;

    /**
     * ==========================================
     * Sales
     * ==========================================
     */

    SalesReturnStore.filteredSalesRows=

        (SalesReturnStore.salesRows||[])

        .filter(

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

                matchCategory(

                    row,

                    filters.category

                )

                &&

                matchERPStatus(

                    row,

                    filters.erpStatus

                )

                &&

                matchStyle(

                    row,

                    filters.styleSearch

                )

        );

    /**
     * ==========================================
     * Returns
     * ==========================================
     */

    SalesReturnStore.filteredReturnRows=

        (SalesReturnStore.returnRows||[])

        .filter(

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

                matchCategory(

                    row,

                    filters.category

                )

                &&

                matchERPStatus(

                    row,

                    filters.erpStatus

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

        !values ||

        !values.length

    ){

        return true;

    }

    const month=

        String(

            row.month??

            row.sale_month??

            ""

        ).trim();

    return values.includes(

        month

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

        !values ||

        !values.length

    ){

        return true;

    }

    const brand=

        String(

            row.brand??

            ""

        ).trim();

    return values.includes(

        brand

    );

}

/**
 * =====================================================
 * Category
 * =====================================================
 */

function matchCategory(

    row,

    values=[]

){

    if(

        !values ||

        !values.length

    ){

        return true;

    }

    const category=

        String(

            row.article_type??

            row.category??

            ""

        ).trim();

    return values.includes(

        category

    );

}

/**
 * =====================================================
 * ERP Status
 * =====================================================
 */

function matchERPStatus(

    row,

    values=[]

){

    if(

        !values ||

        !values.length

    ){

        return true;

    }

    const status=

        String(

            row.erp_status??

            row.status??

            ""

        ).trim();

    return values.includes(

        status

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

    keyword=

        keyword

        .toLowerCase()

        .trim();

    return(

        String(

            row.style_id??

            row.styleId??

            ""

        )

        .toLowerCase()

        .includes(

            keyword

        )

        ||

        String(

            row.erp_sku??

            row.erpSku??

            ""

        )

        .toLowerCase()

        .includes(

            keyword

        )

    );

}