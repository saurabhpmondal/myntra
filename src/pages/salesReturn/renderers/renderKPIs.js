/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V12.1
 * =====================================================
 */

import { renderKPICard } from "../../../components/kpiCard/kpiCard.js";

/**
 * =====================================================
 * Format Amount
 * =====================================================
 */

function formatAmount(value){

    return "₹" +

        Number(value || 0)

            .toLocaleString("en-IN");

}

/**
 * =====================================================
 * Render
 * =====================================================
 */

export async function renderKPIs(

    target,

    dashboard

){

    target.innerHTML =

    `

<div
class="kpi-grid">

    <div id="srSale"></div>

    <div id="srCancel"></div>

    <div id="srRTO"></div>

    <div id="srCX"></div>

    <div id="srNet"></div>

</div>

`;

    await renderKPICard(

        document.getElementById(

            "srSale"

        ),

        {

            title:"Sale",

            value:formatAmount(

                dashboard.sale.gmv

            ),

            subtitle:

                Number(

                    dashboard.sale.units

                ).toLocaleString("en-IN")

                +

                " Units",

            icon:"badge-indian-rupee",

            growth:0,

            compareLabel:"Previous Period"

        }

    );

    await renderKPICard(

        document.getElementById(

            "srCancel"

        ),

        {

            title:"Cancelled",

            value:formatAmount(

                dashboard.cancel.gmv

            ),

            subtitle:

                Number(

                    dashboard.cancel.units

                ).toLocaleString("en-IN")

                +

                " Units",

            icon:"circle-x",

            growth:0,

            compareLabel:"Previous Period"

        }

    );

    await renderKPICard(

        document.getElementById(

            "srRTO"

        ),

        {

            title:"RTO",

            value:formatAmount(

                dashboard.rto.gmv

            ),

            subtitle:

                Number(

                    dashboard.rto.units

                ).toLocaleString("en-IN")

                +

                " Units",

            icon:"rotate-ccw",

            growth:0,

            compareLabel:"Previous Period"

        }

    );

    await renderKPICard(

        document.getElementById(

            "srCX"

        ),

        {

            title:"CX Return",

            value:formatAmount(

                dashboard.cx.gmv

            ),

            subtitle:

                Number(

                    dashboard.cx.units

                ).toLocaleString("en-IN")

                +

                " Units",

            icon:"package-x",

            growth:0,

            compareLabel:"Previous Period"

        }

    );

    await renderKPICard(

        document.getElementById(

            "srNet"

        ),

        {

            title:"Net",

            value:formatAmount(

                dashboard.net.gmv

            ),

            subtitle:

                Number(

                    dashboard.net.units

                ).toLocaleString("en-IN")

                +

                " Units",

            icon:"wallet",

            growth:0,

            compareLabel:"Previous Period"

        }

    );

}