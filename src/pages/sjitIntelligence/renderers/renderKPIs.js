/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT KPI Renderer
 * Version : V1.0
 * =====================================================
 */

export async function renderKPIs(

    target,

    kpis

){

    target.innerHTML=`

<div class="kpi-grid">

    ${buildCard(

        "Total Stock",

        kpis.totalStock.toLocaleString(),

        "Current SJIT Stock"

    )}

    ${buildCard(

        "Total Sale",

        kpis.totalSale.toLocaleString(),

        "SJIT Units Sold"

    )}

    ${buildCard(

        "Sell Through",

        kpis.sellThrough.toFixed(1)+"%",

        "(Sale ÷ Stock) × 100"

    )}

    ${buildCard(

        "Top FC",

        kpis.topFC

        ?

        kpis.topFC.fc

        :

        "-",

        "Highest Units Sold"

    )}

    ${buildCard(

        "Top State",

        kpis.topState

        ?

        kpis.topState[0]

        :

        "-",

        "Highest Units Sold"

    )}

</div>

`;

}

function buildCard(

    title,

    value,

    tooltip

){

    return`

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