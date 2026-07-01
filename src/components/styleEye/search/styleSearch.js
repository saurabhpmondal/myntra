/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search
 * Version : V2.3
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { searchStyle } from "../../../services/styleEye/styleSearchService.js";

import { buildStyleContext } from "../../../services/styleEye/styleContextBuilder.js";

import { renderStyleSelector } from "../selector/styleSelector.js";

import { renderHeroPanel } from "../hero/heroPanel.js";

import { renderOverviewPanel } from "../overview/overviewPanel.js";

import { renderSalesPanel } from "../sales/salesPanel.js";

import { renderInventoryPanel } from "../inventory/inventoryPanel.js";

export async function renderStyleSearch(target){

    await createComponent({

        target,

        html:"src/components/styleEye/search/styleSearch.html",

        css:"src/components/styleEye/search/styleSearch.css"

    });

    bindEvents(target);

}

function bindEvents(target){

    const searchBox =
        target.querySelector("#styleEyeSearch");

    const button =
        target.querySelector("#deepDiveButton");

    button.onclick = async ()=>{

        const keyword =
            searchBox.value.trim();

        if(!keyword){

            searchBox.focus();

            return;

        }

        button.disabled = true;

        button.textContent = "Searching...";

        try{

            const result = searchStyle(keyword);

            switch(result.type){

                case "STYLE":

                    await openStyle(

                        target,

                        result.results[0].styleId

                    );

                    break;

                case "MULTIPLE":

                    target.innerHTML = "";

                    await renderStyleSelector(

                        target,

                        result.results,

                        async styleId=>{

                            await openStyle(

                                target,

                                styleId

                            );

                        }

                    );

                    break;

                case "NOT_FOUND":

                    alert(

                        "No matching Style ID or ERP SKU found."

                    );

                    break;

                default:

                    break;

            }

        }

        catch(error){

            console.error(

                "Style Eye Search Failed",

                error

            );

            alert(

                "Unable to load Style Eye."

            );

        }

        finally{

            button.disabled = false;

            button.textContent = "🔍 Deep Dive";

        }

    };

    searchBox.addEventListener(

        "keydown",

        event=>{

            if(event.key==="Enter"){

                button.click();

            }

        }

    );

}

/**
 * =====================================================
 * Open Style
 * =====================================================
 */

async function openStyle(

    target,

    styleId

){

    const context =

        buildStyleContext(styleId);

    if(!context){

        alert(

            "Unable to build Style Context."

        );

        return;

    }

    target.innerHTML = "";

    // ==========================================
    // Hero Panel
    // ==========================================

    const heroSection =

        document.createElement("div");

    heroSection.className =

        "dashboard-section";

    target.appendChild(heroSection);

    await renderHeroPanel(

        heroSection,

        context

    );

    // ==========================================
    // Overview Panel
    // ==========================================

    const overviewSection =

        document.createElement("div");

    overviewSection.className =

        "dashboard-section";

    target.appendChild(overviewSection);

    await renderOverviewPanel(

        overviewSection,

        context

    );

    // ==========================================
    // Sales Intelligence
    // ==========================================

    const salesSection =

        document.createElement("div");

    salesSection.className =

        "dashboard-section";

    target.appendChild(salesSection);

    await renderSalesPanel(

        salesSection,

        context

    );

    // ==========================================
    // Inventory Intelligence
    // ==========================================

    const inventorySection =

        document.createElement("div");

    inventorySection.className =

        "dashboard-section";

    target.appendChild(

        inventorySection

    );

    await renderInventoryPanel(

        inventorySection,

        context

    );

}