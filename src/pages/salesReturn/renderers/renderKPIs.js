/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V2.0
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

    if(

        !target

    ){

        return;

    }

    target.innerHTML=`

<div class="kpi-grid">

    <div id="kpiSale"></div>

    <div id="kpiCancel"></div>

    <div id="kpiRTO"></div>

    <div id="kpiCXReturn"></div>

    <div id="kpiNet"></div>

</div>

`;

    await renderSaleKPI(

        document.getElementById(

            "kpiSale"

        ),

        kpis.sale||{}

    );

    await renderCancelKPI(

        document.getElementById(

            "kpiCancel"

        ),

        kpis.cancel||{}

    );

    await renderRTOKPI(

        document.getElementById(

            "kpiRTO"

        ),

        kpis.rto||{}

    );

    await renderCXReturnKPI(

        document.getElementById(

            "kpiCXReturn"

        ),

        kpis.cxReturn||{}

    );

    await renderNetKPI(

        document.getElementById(

            "kpiNet"

        ),

        kpis.net||{}

    );

}