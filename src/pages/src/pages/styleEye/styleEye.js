/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye
 * Version : V1.0
 * =====================================================
 */

import { renderStyleSearch } from "../../components/styleEye/search/styleSearch.js";

let pageContainer = null;

/**
 * ==========================================
 * Render
 * ==========================================
 */

export async function renderStyleEye(target){

    pageContainer = target;

    await refreshStyleEye();

}

/**
 * ==========================================
 * Refresh
 * ==========================================
 */

export async function refreshStyleEye(){

    if(!pageContainer){

        return;

    }

    pageContainer.innerHTML = "";

    const searchSection = document.createElement("div");

    searchSection.className = "dashboard-section";

    pageContainer.appendChild(searchSection);

    await renderStyleSearch(searchSection);

}