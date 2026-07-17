/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Render Dashboard
 * Version : V13.4
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { renderKPIs } from "../renderers/renderKPIs.js";
import { renderPOTypeReport } from "../renderers/renderPOTypeReport.js";
import { renderBrandReport } from "../renderers/renderBrandReport.js";
import { renderStyleReport } from "../renderers/renderStyleReport.js";
import { renderReturnReasonReport } from "../renderers/renderReturnReasonReport.js";
import { renderTrendReport } from "../renderers/renderTrendReport.js";

export async function renderDashboard(){

    /**
     * ==========================================
     * KPI
     * ==========================================
     */

    const kpiContainer = document.getElementById(

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
     * PO Type
     * ==========================================
     */

    const poContainer = document.getElementById(

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
     * Brand
     * ==========================================
     */

    const brandContainer = document.getElementById(

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
     * Style
     * ==========================================
     */

    const styleContainer = document.getElementById(

        "salesReturnStyle"

    );

    if(styleContainer){

        await renderStyleReport(

            styleContainer,

            SalesReturnStore.reports.style

        );

    }

    /**
     * ==========================================
     * Return Reason
     * ==========================================
     */

    const reasonContainer = document.getElementById(

        "salesReturnReason"

    );

    if(reasonContainer){

        await renderReturnReasonReport(

            reasonContainer,

            SalesReturnStore.reports.returnReason

        );

    }

    /**
     * ==========================================
     * Trend
     * ==========================================
     */

    const trendContainer = document.getElementById(

        "salesReturnTrend"

    );

    if(trendContainer){

        await renderTrendReport(

            trendContainer,

            SalesReturnStore.reports.trend

        );

    }

}