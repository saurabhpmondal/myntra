/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Refresh Dashboard
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "./salesReturnStore.js";

import {

    comparePeriods

}

from "../engines/period/comparePeriods.js";

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

    const{

        current,

        previous

    }=

    comparePeriods(

        SalesReturnStore.filteredRows,

        SalesReturnStore.filters.periods

    );

    /**
     * KPI
     */

    SalesReturnStore.kpis=

        buildKPIs(

            current,

            previous

        );

    /**
     * Insights
     */

    SalesReturnStore.insights=

        buildInsights(

            SalesReturnStore.kpis

        );

    /**
     * Reports
     */

    SalesReturnStore.poTypeReport=

        buildPOTypeReport(

            current,

            previous

        );

    SalesReturnStore.brandReport=

        buildBrandReport(

            current,

            previous

        );

    SalesReturnStore.styleReport=

        buildStyleReport(

            current,

            previous

        );

    SalesReturnStore.returnReasonReport=

        buildReturnReasonReport(

            current,

            previous

        );

    SalesReturnStore.trendReport=

        buildTrendReport(

            current,

            previous

        );

    /**
     * Render
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

}