/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V12.4
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { filterData } from "../engines/filterData.js";

import { buildLookup } from "../engines/buildLookup.js";

import { buildKPIs } from "../engines/buildKPIs.js";

import { buildPOTypeReport } from "../builders/buildPOTypeReport.js";
import { buildBrandReport } from "../builders/buildBrandReport.js";

import { renderKPIs } from "../renderers/renderKPIs.js";

import { renderPOTypeReport } from "../renderers/renderPOTypeReport.js";
import { renderBrandReport } from "../renderers/renderBrandReport.js";

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function refreshDashboard(){

    SalesReturnStore.loading = true;

    SalesReturnStore.sales=[];

    SalesReturnStore.returns=[];

    SalesReturnStore.lookup={};

    SalesReturnStore.dashboard={

        sale:{gmv:0,units:0},

        cancel:{gmv:0,units:0},

        rto:{gmv:0,units:0},

        cx:{gmv:0,units:0},

        net:{gmv:0,units:0}

    };

    SalesReturnStore.reports={

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    };

    /**
     * ==========================================
     * Apply Global Filter
     * ==========================================
     */

    const{

        sales,

        returns

    }=filterData();

    SalesReturnStore.sales=sales;

    SalesReturnStore.returns=returns;

    /**
     * ==========================================
     * Build Lookup
     * ==========================================
     */

    SalesReturnStore.lookup=

        buildLookup(

            SalesReturnStore.sales

        );

    /**
     * ==========================================
     * KPI
     * ==========================================
     */

    SalesReturnStore.dashboard=

        buildKPIs(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    SalesReturnStore.reports.poType=

        buildPOTypeReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    SalesReturnStore.reports.brand=

        buildBrandReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Render KPI
     * ==========================================
     */

    const kpiContainer=

        document.getElementById(

            "salesReturnKPIs"

        );

    if(kpiContainer){

        await renderKPIs(

            kpiContainer,

            SalesReturnStore.dashboard

        );

    }

    /**
     * ==========================================
     * Render PO Type
     * ==========================================
     */

    const poContainer=

        document.getElementById(

            "salesReturnPOType"

        );

    if(poContainer){

        await renderPOTypeReport(

            poContainer,

            SalesReturnStore.reports.poType

        );

    }

    /**
     * ==========================================
     * Render Brand
     * ==========================================
     */

    const brandContainer=

        document.getElementById(

            "salesReturnBrand"

        );

    if(brandContainer){

        await renderBrandReport(

            brandContainer,

            SalesReturnStore.reports.brand

        );

    }

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    SalesReturnStore.loading=false;

    SalesReturnStore.loaded=true;

    SalesReturnStore.generatedOn=

        new Date();

    SalesReturnStore.ui.lastRefresh=

        new Date();

    /**
     * ==========================================
     * Debug
     * ==========================================
     */

    console.group(

        "Sales & Return"

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

    console.groupEnd();

}