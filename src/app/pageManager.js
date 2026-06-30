/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Page Manager
 * Version : V1.9
 * =====================================================
 */

import { renderDashboard } from "../pages/dashboard/dashboard.js";
import { renderDailySales } from "../pages/dailySales/dailySales.js";
import { renderBusiness } from "../pages/business/business.js";
import { renderGrowthPage } from "../pages/growth/growth.js";
import { renderShipment } from "../pages/shipment/shipment.js";
import { renderSorShipment } from "../pages/sorShipment/sorShipment.js";
import {
    renderStyleEye,
    destroyStyleEye
} from "../pages/styleEye/styleEye.js";
import { renderAds } from "../components/ads/ads.js";

let content = null;

let currentPage = "dashboard";

export function initializePageManager(container){

    content = container;

}

export function getCurrentPage(){

    return currentPage;

}

export async function refreshCurrentPage(){

    await openPage(currentPage);

}

export async function openPage(page){

    if(!content){

        console.error("Page Manager not initialized.");

        return;

    }

    // ==========================================
    // Cleanup previous page
    // ==========================================

    if(currentPage === "style-eye"){

        destroyStyleEye();

    }

    currentPage = page;

    switch(page){

        case "dashboard":

            await renderDashboard(content);

            break;

        case "daily-sales":

            await renderDailySales(content);

            break;

        case "business":

            await renderBusiness(content);

            break;

        case "growth":

            await renderGrowthPage(content);

            break;

        case "shipment":

            await renderShipment(content);

            break;

        case "sor-shipment":

            await renderSorShipment(content);

            break;

        case "style-eye":

            await renderStyleEye(content);

            break;

        case "ads":

            await renderAds(content);

            break;

        case "surge":

        case "sales-drop":

        case "new-launch":

            comingSoon(page);

            break;

        default:

            await renderDashboard(content);

            break;

    }

}

function comingSoon(page){

    const title = page
        .split("-")
        .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
        .join(" ");

    content.innerHTML = `

        <div class="dashboard-card" style="padding:60px;text-align