/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderSaleKPI

}

from "./kpis/renderSaleKPI.js";

import {

    renderCancelKPI

}

from "./kpis/renderCancelKPI.js";

import {

    renderRTOKPI

}

from "./kpis/renderRTOKPI.js";

import {

    renderCXReturnKPI

}

from "./kpis/renderCXReturnKPI.js";

import {

    renderNetKPI

}

from "./kpis/renderNetKPI.js";

/**
 * =====================================================
 * Render KPIs
 * =====================================================
 */

export async function renderKPIs(

    target,

    kpis={}

){

    await renderSaleKPI(

        document.getElementById(

            "kpiSale"

        ),

        kpis.sale

    );

    await renderCancelKPI(

        document.getElementById(

            "kpiCancel"

        ),

        kpis.cancel

    );

    await renderRTOKPI(

        document.getElementById(

            "kpiRTO"

        ),

        kpis.rto

    );

    await renderCXReturnKPI(

        document.getElementById(

            "kpiCXReturn"

        ),

        kpis.cxReturn

    );

    await renderNetKPI(

        document.getElementById(

            "kpiNet"

        ),

        kpis.net

    );

}