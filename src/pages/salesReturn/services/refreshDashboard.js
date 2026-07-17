/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V13.4
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { prepareDashboard } from "./prepareDashboard.js";

import { prepareReports } from "./prepareReports.js";

import { renderDashboard } from "./renderDashboard.js";

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function refreshDashboard(){

    SalesReturnStore.loading = true;

    /**
     * ==========================================
     * Reset Runtime Data
     * ==========================================
     */

    SalesReturnStore.sales = [];

    SalesReturnStore.returns = [];

    SalesReturnStore.lookup = {};

    SalesReturnStore.currentDashboard = {

        sale:{gmv:0,units:0},

        cancel:{gmv:0,units:0},

        rto:{gmv:0,units:0},

        cx:{gmv:0,units:0},

        net:{gmv:0,units:0}

    };

    SalesReturnStore.previousDashboard = {

        sale:{gmv:0,units:0},

        cancel:{gmv:0,units:0},

        rto:{gmv:0,units:0},

        cx:{gmv:0,units:0},

        net:{gmv:0,units:0}

    };

    SalesReturnStore.dashboard = {

        sale:{},

        cancel:{},

        rto:{},

        cx:{},

        net:{}

    };

    SalesReturnStore.reports = {

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    };

    /**
     * ==========================================
     * Prepare Dashboard
     * ==========================================
     */

    await prepareDashboard();

    /**
     * ==========================================
     * Prepare Reports
     * ==========================================
     */

    await prepareReports();

    /**
     * ==========================================
     * Render Dashboard
     * ==========================================
     */

    await renderDashboard();

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

    console.group(

        "Sales & Return V13.4"

    );

    console.log(

        "Sales Rows:",

        SalesReturnStore.sales.length

    );

    console.log(

        "Return Rows:",

        SalesReturnStore.returns.length

    );

    console.log(

        "Lookup:",

        Object.keys(

            SalesReturnStore.lookup

        ).length

    );

    console.log(

        "PO Types:",

        SalesReturnStore.reports.poType.length

    );

    console.log(

        "Brands:",

        SalesReturnStore.reports.brand.length

    );

    console.log(

        "Styles:",

        SalesReturnStore.reports.style.length

    );

    console.log(

        "Return Reasons:",

        SalesReturnStore.reports.returnReason.length

    );

    console.log(

        "Trend Periods:",

        SalesReturnStore.reports.trend.length

    );

    console.log(

        "Current Sale GMV:",

        SalesReturnStore.currentDashboard.sale.gmv

    );

    console.log(

        "Previous Sale GMV:",

        SalesReturnStore.previousDashboard.sale.gmv

    );

    console.groupEnd();

}