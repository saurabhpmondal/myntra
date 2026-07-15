/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V12.1
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { filterData } from "../engines/filterData.js";

import { buildLookup } from "../engines/buildLookup.js";

import { buildKPIs } from "../engines/buildKPIs.js";

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function refreshDashboard(){

    SalesReturnStore.loading = true;

    /**
     * ==========================================
     * Reset
     * ==========================================
     */

    SalesReturnStore.sales = [];

    SalesReturnStore.returns = [];

    SalesReturnStore.lookup = {};

    SalesReturnStore.dashboard = {

        sale:{gmv:0,units:0},

        cancel:{gmv:0,units:0},

        rto:{gmv:0,units:0},

        cx:{gmv:0,units:0},

        net:{gmv:0,units:0}

    };

    /**
     * ==========================================
     * Apply Global Filters
     * ==========================================
     */

    const {

        sales,

        returns

    } = filterData();

    SalesReturnStore.sales = sales;

    SalesReturnStore.returns = returns;

    /**
     * ==========================================
     * Build Order Lookup
     * ==========================================
     */

    SalesReturnStore.lookup = buildLookup(

        SalesReturnStore.sales

    );

    /**
     * ==========================================
     * Build KPI
     * ==========================================
     */

    SalesReturnStore.dashboard = buildKPIs(

        SalesReturnStore.sales,

        SalesReturnStore.returns,

        SalesReturnStore.lookup

    );

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    SalesReturnStore.loading = false;

    SalesReturnStore.loaded = true;

    SalesReturnStore.generatedOn = new Date();

    SalesReturnStore.ui.lastRefresh = new Date();

    /**
     * ==========================================
     * Debug
     * ==========================================
     */

    console.group("Sales & Return");

    console.log(

        "Sales Rows :",

        SalesReturnStore.sales.length

    );

    console.log(

        "Return Rows :",

        SalesReturnStore.returns.length

    );

    console.log(

        "Lookup :",

        Object.keys(

            SalesReturnStore.lookup

        ).length

    );

    console.table({

        "Sale GMV":

            SalesReturnStore.dashboard.sale.gmv,

        "Sale Units":

            SalesReturnStore.dashboard.sale.units,

        "Cancel GMV":

            SalesReturnStore.dashboard.cancel.gmv,

        "Cancel Units":

            SalesReturnStore.dashboard.cancel.units,

        "RTO GMV":

            SalesReturnStore.dashboard.rto.gmv,

        "RTO Units":

            SalesReturnStore.dashboard.rto.units,

        "CX GMV":

            SalesReturnStore.dashboard.cx.gmv,

        "CX Units":

            SalesReturnStore.dashboard.cx.units,

        "Net GMV":

            SalesReturnStore.dashboard.net.gmv,

        "Net Units":

            SalesReturnStore.dashboard.net.units

    });

    console.groupEnd();

}