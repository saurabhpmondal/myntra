/**
 * =====================================================
 * Project Phoenix
 * Dashboard KPI Row
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";
import { renderKPICard } from "../../kpiCard/kpiCard.js";

import { getDashboardSummary } from "../../../services/dashboardService.js";

import {

    formatCompactCurrency,
    formatCompactNumber,
    formatCurrency,
    formatNumber

} from "../../../utils/formatter.js";

export async function renderKPIRow(target){

    await createComponent({

        target,

        html:"src/components/dashboard/kpiRow/kpiRow.html",

        css:"src/components/dashboard/kpiRow/kpiRow.css"

    });

    const summary = getDashboardSummary();

    await renderKPICard(

        document.getElementById("kpi-gmv"),

        {

            title:"Revenue",

            value:formatCompactCurrency(summary.revenue),

            icon:"indian-rupee",

            change:summary.month,

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-orders"),

        {

            title:"Units Sold",

            value:formatNumber(summary.unitsSold),

            icon:"package",

            change:summary.month,

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-units"),

        {

            title:"Avg Selling Price",

            value:formatCurrency(summary.avgSellingPrice),

            icon:"badge-indian-rupee",

            change:summary.month,

            trend:"up"

        }

    );

    await renderKPICard(

        document.getElementById("kpi-asp"),

        {

            title:"Sold Styles",

            value:formatNumber(summary.soldStyles),

            icon:"shirt",

            change:summary.month,

            trend:"up"

        }

    );

}