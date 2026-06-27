/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Page Manager
 * Version : V1.1
 * =====================================================
 */

import { renderDashboard } from "../pages/dashboard/dashboard.js";
import { renderDailySales } from "../pages/dailySales/dailySales.js";

let content = null;

export function initializePageManager(container){

    content = container;

}

export async function openPage(page){

    if(!content){

        console.error("Page Manager not initialized.");

        return;

    }

    switch(page){

        case "dashboard":

            await renderDashboard(content);

            break;

        case "daily-sales":

            await renderDailySales(content);

            break;

        case "business":

        case "growth":

        case "shipment":

        case "surge":

        case "sales-drop":

        case "new-launch":

        case "style-eye":

        case "ads":

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

        <div class="dashboard-card" style="padding:60px;text-align:center;">

            <h2>${title}</h2>

            <p>This module is under development.</p>

        </div>

    `;

}