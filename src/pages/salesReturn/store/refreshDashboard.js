/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V2.1
 * =====================================================
 */

import {

    SalesReturnStore

}

from "./salesReturnStore.js";

import {

    buildOrderLineDataset

}

from "../engines/orderLine/buildOrderLineDataset.js";

import {

    buildDataset

}

from "../engines/dataset/buildDataset.js";

import {

    buildKPIs

}

from "../calculations/buildKPIs.js";

import {

    buildInsights

}

from "../calculations/buildInsights.js";

import {

    buildPOTypeReport

}

from "../calculations/reports/buildPOTypeReport.js";

import {

    buildBrandReport

}

from "../calculations/reports/buildBrandReport.js";

import {

    buildStyleReport

}

from "../calculations/reports/buildStyleReport.js";

import {

    buildReturnReasonReport

}

from "../calculations/reports/buildReturnReasonReport.js";

import {

    buildTrendReport

}

from "../calculations/reports/buildTrendReport.js";

import {

    renderKPIs

}

from "../renderers/renderKPIs.js";

import {

    renderInsights

}

from "../renderers/renderInsights.js";

import {

    renderPOType

}

from "../renderers/renderPOType.js";

import {

    renderBrand

}

from "../renderers/renderBrand.js";

import {

    renderStyle

}

from "../renderers/renderStyle.js";

import {

    renderReturnReason

}

from "../renderers/renderReturnReason.js";

import {

    renderTrend

}

from "../renderers/renderTrend.js";

/**
 * =====================================================
 * Refresh Dashboard
 * =====================================================
 */

export async function refreshDashboard(){

    /**
     * =============================================
     * Normalize Dataset
     * =============================================
     */

    SalesReturnStore.normalizedRows=

        buildOrderLineDataset(

            SalesReturnStore.filteredSalesRows,

            SalesReturnStore.filteredReturnRows

        );

    /**
     * =============================================
     * Build Dataset
     * =============================================
     */

    const dataset=

        buildDataset(

            SalesReturnStore.normalizedRows

        );

    SalesReturnStore.actualRows=

        dataset.actualRows;

    SalesReturnStore.attributedRows=

        dataset.attributedRows;

    /**
     * =============================================
     * KPI
     * =============================================
     */

    SalesReturnStore.kpis=

        buildKPIs(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    /**
     * =============================================
     * Insights
     * =============================================
     */

    SalesReturnStore.insights=

        buildInsights(

            SalesReturnStore.kpis

        );

    /**
     * =============================================
     * Reports
     * =============================================
     */

    SalesReturnStore.poTypeReport=

        buildPOTypeReport(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    SalesReturnStore.brandReport=

        buildBrandReport(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    SalesReturnStore.styleReport=

        buildStyleReport(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    SalesReturnStore.returnReasonReport=

        buildReturnReasonReport(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    SalesReturnStore.trendReport=

        buildTrendReport(

            SalesReturnStore.actualRows,

            SalesReturnStore.attributedRows

        );

    /**
     * =============================================
     * Render
     * =============================================
     */

    await renderKPIs(

        document.getElementById(

            "salesReturnKPIs"

        ),

        SalesReturnStore.kpis

    );

    await renderInsights(

        document.getElementById(

            "salesReturnInsights"

        ),

        SalesReturnStore.insights

    );

    await renderPOType(

        document.getElementById(

            "salesReturnPOType"

        ),

        SalesReturnStore.poTypeReport

    );

    await renderBrand(

        document.getElementById(

            "salesReturnBrand"

        ),

        SalesReturnStore.brandReport

    );

    await renderStyle(

        document.getElementById(

            "salesReturnStyle"

        ),

        SalesReturnStore.styleReport

    );

    await renderReturnReason(

        document.getElementById(

            "salesReturnReturnReason"

        ),

        SalesReturnStore.returnReasonReport

    );

    await renderTrend(

        document.getElementById(

            "salesReturnTrend"

        ),

        SalesReturnStore.trendReport

    );

    /**
     * =============================================
     * Update State
     * =============================================
     */

    SalesReturnStore.ui.lastRefresh=

        new Date();

}