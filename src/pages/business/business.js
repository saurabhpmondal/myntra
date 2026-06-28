/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Business Page
 * Version : V1.0
 * =====================================================
 */

import { renderBusinessKPIRow } from "../../components/business/kpiRow/kpiRow.js";

import { renderMonthWiseUnits } from "../../components/business/monthWiseUnits/monthWiseUnits.js";

import { renderMonthWiseGMV } from "../../components/business/monthWiseGMV/monthWiseGMV.js";

import { renderMonthWiseASP } from "../../components/business/monthWiseASP/monthWiseASP.js";

import { renderFreshnessContribution } from "../../components/business/freshnessContribution/freshnessContribution.js";

import { renderLiveCount } from "../../components/business/liveCount/liveCount.js";

let businessContainer = null;

/**
 * ==========================================
 * Initial Render
 * ==========================================
 */

export async function renderBusiness(target){

    businessContainer = target;

    await refreshBusiness();

}

/**
 * ==========================================
 * Refresh
 * ==========================================
 */

export async function refreshBusiness(){

    if(!businessContainer){

        console.warn("Business container not found.");

        return;

    }

    businessContainer.innerHTML = "";

    // KPI Row

    await addSection(renderBusinessKPIRow);

    // 6 Month Units

    await addSection(renderMonthWiseUnits);

    // 6 Month GMV

    await addSection(renderMonthWiseGMV);

    // 6 Month ASP

    await addSection(renderMonthWiseASP);

    // Freshness

    await addSection(renderFreshnessContribution);

    // Live Count

    await addSection(renderLiveCount);

}

/**
 * ==========================================
 * Section Helper
 * ==========================================
 */

async function addSection(renderer){

    const section = document.createElement("div");

    section.className = "dashboard-section";

    businessContainer.appendChild(section);

    await renderer(section);

}