/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Daily Sales Page
 * Version : V1.0
 * =====================================================
 */

import { renderDailySalesTable } from "../../components/dailySales/dailySalesTable/dailySalesTable.js";

// Future Imports
// import { renderProjectionSummary } ...
// import { renderBrandChannelPerformance } ...

let pageContainer = null;

/**
 * ==========================================
 * Initial Render
 * ==========================================
 */

export async function renderDailySales(target){

    pageContainer = target;

    await refreshDailySales();

}

/**
 * ==========================================
 * Refresh
 * ==========================================
 */

export async function refreshDailySales(){

    if(!pageContainer){

        console.warn("Daily Sales container not found.");

        return;

    }

    pageContainer.innerHTML = "";

    // ======================================
    // Daily Sales Table
    // ======================================

    const dailySalesSection = createSection();

    pageContainer.appendChild(dailySalesSection);

    await renderDailySalesTable(dailySalesSection);

    // ======================================
    // Projection Summary
    // ======================================

    // const projectionSection = createSection();

    // pageContainer.appendChild(projectionSection);

    // await renderProjectionSummary(projectionSection);

    // ======================================
    // Brand Channel Performance
    // ======================================

    // const brandSection = createSection();

    // pageContainer.appendChild(brandSection);

    // await renderBrandChannelPerformance(brandSection);

}

/**
 * ==========================================
 * Section Factory
 * ==========================================
 */

function createSection(){

    const section = document.createElement("div");

    section.className = "dashboard-section";

    return section;

}