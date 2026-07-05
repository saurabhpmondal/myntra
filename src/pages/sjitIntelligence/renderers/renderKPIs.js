/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT KPI Renderer
 * Version : V1.1
 * =====================================================
 */

import {

    formatNumber

}

from "../../../utils/formatter.js";

export async function renderKPIs(

    target,

    kpis={}

){

    target.innerHTML=`

<div class="kpi-grid">

    ${buildCard(

        "Total Stock",

        formatNumber(

            kpis.totalStock || 0

        ),

        "Current SJIT Inventory"

    )}

    ${buildCard(

        "Total Sale",

        formatNumber(

            kpis.totalSale || 0

        ),

        "Total SJIT Units Sold"

    )}

    ${buildCard(

        "Sell Through",

        `${Number(

            kpis.sellThrough || 0

        ).toFixed(1)}%`,

        "Formula : (Sold Qty ÷ Current Stock) × 100"

    )}

    ${buildCard(

        "Top FC",

        kpis.topFC

        ?

        kpis.topFC.fc

        :

        "-",

        "Fulfilment Centre with Highest Units Sold"

    )}

    ${buildCard(

        "Top State",

        kpis.topState

        ?

        kpis.topState[0]

        :

        "-",

        "State with Highest SJIT Sales"

    )}

</div>

`;

}

/**
 * =====================================================
 * KPI Card
 * =====================================================
 */

function buildCard(

    title,

    value,

    tooltip

){

    return `

<div

    class="kpi-card"

    title="${tooltip}"

>

    <div class="kpi-title">

        ${title}

    </div>

    <div class="kpi-value">

        ${value}

    </div>

</div>

`;

}