/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Page
 * Version : V1.1
 * =====================================================
 */

import { renderKPIRow } from "../../components/dashboard/kpiRow/kpiRow.js";

// Future imports
// import { renderSalesTrend } ...
// import { renderBrandContribution } ...
// import { renderTopStyles } ...

let dashboardContainer = null;

/**
 * Initial Dashboard Render
 */

export async function renderDashboard(target){

    dashboardContainer = target;

    await refreshDashboard();

}

/**
 * Refresh Dashboard
 */

export async function refreshDashboard(){

    if(!dashboardContainer){

        console.warn("Dashboard container not found.");

        return;

    }

    dashboardContainer.innerHTML = "";

    // KPI Row

    const kpiSection = document.createElement("div");

    kpiSection.className = "dashboard-section";

    dashboardContainer.appendChild(kpiSection);

    await renderKPIRow(kpiSection);

    // Future Widgets

    // await renderSalesTrend(dashboardContainer);

    // await renderBrandContribution(dashboardContainer);

    // await renderTopStyles(dashboardContainer);

}