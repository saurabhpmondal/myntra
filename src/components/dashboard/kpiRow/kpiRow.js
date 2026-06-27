/**
 * =====================================================
 * Project Phoenix
 * KPI Row Widget
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";
import { renderKPICard } from "../../kpiCard/kpiCard.js";

export async function renderKPIRow(target){

    await createComponent({

        target,

        html:"src/components/dashboard/kpiRow/kpiRow.html",

        css:"src/components/dashboard/kpiRow/kpiRow.css"

    });

    await renderKPICard(

        document.getElementById("kpi-gmv"),

        {

            title:"GMV",

            value:"₹1.82 Cr",

            icon:"indian-rupee",

            change:"+18.2%",

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-orders"),

        {

            title:"Orders",

            value:"24,581",

            icon:"shopping-bag",

            change:"+8.4%",

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-units"),

        {

            title:"Units",

            value:"31,294",

            icon:"package",

            change:"+10.1%",

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-asp"),

        {

            title:"ASP",

            value:"₹582",

            icon:"badge-indian-rupee",

            change:"-1.4%",

            trend:"down"

        }

    );

}