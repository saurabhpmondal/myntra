/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Page
 * Version : V1.3
 * =====================================================
 */

import { renderKPIRow } from "../../components/dashboard/kpiRow/kpiRow.js";
import { renderRevenueTrend } from "../../components/dashboard/revenueTrend/revenueTrend.js";
import { renderTopStyles } from "../../components/dashboard/topStyles/topStyles.js";

let dashboardContainer = null;

/**
 * ==========================================
 * Initial Dashboard Render
 * ==========================================
 */

export async function renderDashboard(target){

    dashboardContainer = target;

    await refreshDashboard();

}

/**
 * ==========================================
 * Refresh Dashboard
 * ==========================================
 */

export async function refreshDashboard(){

    if(!dashboardContainer){

        console.warn("Dashboard container not found.");

        return;

    }

    dashboardContainer.innerHTML = "";

    // ======================================
    // KPI Row
    // ======================================

    const kpiSection = createSection();

    dashboardContainer.appendChild(kpiSection);

    await renderKPIRow(kpiSection);

    // ======================================
    // Revenue Trend
    // ======================================

    const revenueSection = createSection();

    dashboardContainer.appendChild(revenueSection);

    await renderRevenueTrend(revenueSection);

    // ======================================
    // Top 20 Styles
    // ======================================

    const topStyleSection = createSection();

    dashboardContainer.appendChild(topStyleSection);

    await renderTopStyles(topStyleSection);

    // ======================================
    // Future Widgets
    // ======================================

    // const poTypeSection = createSection();
    // dashboardContainer.appendChild(poTypeSection);
    // await renderPOTypePerformance(poTypeSection);

    // const brandSection = createSection();
    // dashboardContainer.appendChild(brandSection);
    // await renderBrandPerformance(brandSection);

    // const dayOnDaySection = createSection();
    // dashboardContainer.appendChild(dayOnDaySection);
    // await renderDayOnDaySales(dayOnDaySection);

}

/**
 * ==========================================
 * Dashboard Section Factory
 * ==========================================
 */

function createSection(){

    const section = document.createElement("div");

    section.className = "dashboard-section";

    return section;

}