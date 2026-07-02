/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index KPI Renderer
 * Version : V1.0
 * =====================================================
 */

export async function renderKPIs(

    target

){

    const kpis=[

        {

            title:"Total Styles",

            value:"-",

            id:"diTotalStyles",

            icon:"📦"

        },

        {

            title:"Top Style",

            value:"-",

            id:"diTopStyle",

            icon:"🏆"

        },

        {

            title:"Top Brand",

            value:"-",

            id:"diTopBrand",

            icon:"👑"

        },

        {

            title:"80% DW Styles",

            value:"-",

            id:"diCoreStyles",

            icon:"🎯"

        },

        {

            title:"Top 10 Contribution",

            value:"-",

            id:"diTop10Contribution",

            icon:"📈"

        },

        {

            title:"Movers",

            value:"-",

            id:"diMovers",

            icon:"🚀"

        }

    ];

    target.innerHTML=

        kpis.map(kpi=>`

<div class="di-kpi-card">

    <div class="di-kpi-top">

        <div class="di-kpi-icon">

            ${kpi.icon}

        </div>

        <div class="di-kpi-title">

            ${kpi.title}

        </div>

    </div>

    <div
        id="${kpi.id}"
        class="di-kpi-value">

        ${kpi.value}

    </div>

</div>

`).join("");

}