/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Page Manager
 * Version : V1.0
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

        case "dailySales":

            await renderDailySales(content);

            break;

        case "dashboard":

        default:

            await renderDashboard(content);

            break;

    }

}