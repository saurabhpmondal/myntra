/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V12.0
 * =====================================================
 */

function formatAmount(value){

    return "₹" +

        Number(value || 0)

            .toLocaleString("en-IN");

}

function buildCard(

    title,

    data

){

    return `

<div class="kpi-card">

    <div class="kpi-title">

        ${title}

    </div>

    <div class="kpi-value">

        ${formatAmount(

            data.gmv

        )}

    </div>

    <div class="kpi-sub">

        ${Number(

            data.units

        ).toLocaleString("en-IN")} Units

    </div>

</div>

`;

}

/**
 * =====================================================
 * Render KPIs
 * =====================================================
 */

export async function renderKPIs(

    target,

    dashboard

){

    target.innerHTML =

    `

<div class="kpi-grid">

    ${buildCard(

        "Sale",

        dashboard.sale

    )}

    ${buildCard(

        "Cancelled",

        dashboard.cancel

    )}

    ${buildCard(

        "RTO",

        dashboard.rto

    )}

    ${buildCard(

        "CX Return",

        dashboard.cx

    )}

    ${buildCard(

        "Net",

        dashboard.net

    )}

</div>

`;

}