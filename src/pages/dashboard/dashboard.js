/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dashboard Page
 * Version : V1.2
 * =====================================================
 */

import { renderKPIRow } from "../../components/dashboard/kpiRow/kpiRow.js";
import { renderRevenueTrend } from "../../components/dashboard/revenueTrend/revenueTrend.js";

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
    // Future Widgets
    // ======================================

    // const brandSection = createSection();
    // dashboardContainer.appendChild(brandSection);
    // await renderBrandPerformance(brandSection);

    // const categorySection = createSection();
    // dashboardContainer.appendChild(categorySection);
    // await renderCategoryPerformance(categorySection);

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