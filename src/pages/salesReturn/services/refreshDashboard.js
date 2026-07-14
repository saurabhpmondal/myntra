/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V12.0
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { filterData } from "../engines/filterData.js";

import { buildLookup } from "../engines/buildLookup.js";

import { aggregateEngine } from "../engines/aggregateEngine.js";

export async function refreshDashboard(){

    SalesReturnStore.loading=true;

    /**
     * ==========================================
     * Apply Global Filters
     * ==========================================
     */

    const {

        sales,

        returns

    } = filterData();

    SalesReturnStore.sales=sales;

    SalesReturnStore.returns=returns;

    /**
     * ==========================================
     * Lookup
     * ==========================================
     */

    SalesReturnStore.orderLookup=

        buildLookup(sales);

    /**
     * ==========================================
     * KPI
     * ==========================================
     */

    SalesReturnStore.dashboard=

        aggregateEngine({

            sales,

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:null

        })[0] || {

            sale:{units:0,gmv:0},

            cancel:{units:0,gmv:0},

            rto:{units:0,gmv:0},

            cx:{units:0,gmv:0},

            net:{units:0,gmv:0}

        };

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    SalesReturnStore.reports.poType=

        aggregateEngine({

            sales,

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:"poType"

        });

    SalesReturnStore.reports.brand=

        aggregateEngine({

            sales,

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:"brand"

        });

    SalesReturnStore.reports.style=

        aggregateEngine({

            sales,

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:"styleId"

        });

    SalesReturnStore.reports.trend=

        aggregateEngine({

            sales,

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:"month"

        });

    SalesReturnStore.reports.returnReason=

        aggregateEngine({

            sales:[],

            returns,

            lookup:SalesReturnStore.orderLookup,

            groupBy:"return_reason"

        });

    SalesReturnStore.generatedOn=

        new Date();

    SalesReturnStore.loading=false;

    SalesReturnStore.loaded=true;

    SalesReturnStore.ui.lastRefresh=

        new Date();

    console.log(

        "Sales & Return Dashboard Ready",

        SalesReturnStore

    );

}