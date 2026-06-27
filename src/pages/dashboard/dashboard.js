/**
 * =====================================================
 * Project Phoenix
 * Dashboard Page
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";
import { renderKPIRow } from "../../components/dashboard/kpiRow/kpiRow.js";

export async function renderDashboard(target){

    await createComponent({

        target,

        html:"src/pages/dashboard/dashboard.html",

        css:"src/pages/dashboard/dashboard.css"

    });

    await renderKPIRow(

        document.getElementById("dashboard-kpi-row")

    );

}