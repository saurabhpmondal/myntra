/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V12.2
 * =====================================================
 */

import { renderKPICard } from "../../../components/kpiCard/kpiCard.js";

/**
 * =====================================================
 * Format Currency
 * =====================================================
 */

function formatAmount(value){

    return "₹" +

        Number(value || 0)

            .toLocaleString("en-IN");

}

/**
 * =====================================================
 * Build KPI Card
 * =====================================================
 */

async function buildCard(

    id,

    title,

    amount,

    units,

    icon

){

    await renderKPICard(

        document.getElementById(id),

        {

            title,

            value:formatAmount(amount),

            subtitle:

                Number(units)

                    .toLocaleString("en-IN")

                +

                " Units",

            icon,

            growth:0,

            compareLabel:"Previous Period"

        }

    );

}

/**
 * =====================================================
 * Render KPI
 * =====================================================
 */

export async function renderKPIs(

    target,

    dashboard

){

    target.innerHTML = `

<style>

.sales-return-kpi-grid{

    display:grid;

    grid-template-columns:repeat(5,minmax(0,1fr));

    gap:20px;

    margin-bottom:24px;

}

@media(max-width:1400px){

    .sales-return-kpi-grid{

        grid-template-columns:repeat(3,minmax(0,1fr));

    }

}

@media(max-width:900px){

    .sales-return-kpi-grid{

        grid-template-columns:repeat(2,minmax(0,1fr));

    }

}

@media(max-width:640px){

    .sales-return-kpi-grid{

        grid-template-columns:1fr;

    }

}

</style>

<div class="sales-return-kpi-grid">

    <div id="srSale"></div>

    <div id="srCancel"></div>

    <div id="srRTO"></div>

    <div id="srCX"></div>

    <div id="srNet"></div>

</div>

`;

    await buildCard(

        "srSale",

        "Sale",

        dashboard.sale.gmv,

        dashboard.sale.units,

        "badge-indian-rupee"

    );

    await buildCard(

        "srCancel",

        "Cancelled",

        dashboard.cancel.gmv,

        dashboard.cancel.units,

        "circle-x"

    );

    await buildCard(

        "srRTO",

        "RTO",

        dashboard.rto.gmv,

        dashboard.rto.units,

        "rotate-ccw"

    );

    await buildCard(

        "srCX",

        "CX Return",

        dashboard.cx.gmv,

        dashboard.cx.units,

        "package-x"

    );

    await buildCard(

        "srNet",

        "Net",

        dashboard.net.gmv,

        dashboard.net.units,

        "wallet"

    );

}