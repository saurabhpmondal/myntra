/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search
 * Version : V2.5
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

import { renderQualityPanel } from "../quality/qualityPanel.js";

import { renderCatalogueFamily } from "../catalogueFamily/catalogueFamily.js";

import { renderStickySearch } from "../stickySearch/stickySearch.js";

/**
 * =====================================================
 * Landing Search
 * =====================================================
 */

export async function renderStyleSearch(target){

    await createComponent({

        target,

        html:"src/components/styleEye/search/styleSearch.html",

        css:"src/components/styleEye/search/styleSearch.css"

    });

    bindLandingEvents(target);

}

/**
 * =====================================================
 * Landing Events
 * =====================================================
 */

function bindLandingEvents(target){

    const searchBox =

        target.querySelector("#styleEyeSearch");

    const button =

        target.querySelector("#deepDiveButton");

    button.onclick = ()=>{

        performSearch(

            target,

            searchBox.value.trim()

        );

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
 * Perform Search
 * =====================================================
 */

async function performSearch(

    target,

    keyword

){

    if(!keyword){

        return;

    }

    const result =

        searchStyle(keyword);

    switch(result.type){

        case "STYLE":

            await openStyle(

                target,

                result.results[0].styleId

            );

            break;

        case "MULTIPLE":

            target.innerHTML="";

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

    }

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

        buildStyleContext(

            styleId

        );

    if(!context){

        alert(

            "Unable to build Style Context."

        );

        return;

    }

    target.innerHTML="";

    /**
     * ==========================================
     * Sticky Search
     * ==========================================
     */

    const stickySection =

        document.createElement("div");

    stickySection.className =

        "dashboard-section";

    target.appendChild(

        stickySection

    );

    await renderStickySearch(

        stickySection,

        async keyword=>{

            const result =

                searchStyle(keyword);

            switch(result.type){

                case "STYLE":

                    window.scrollTo({

                        top:0,

                        behavior:"smooth"

                    });

                    await openStyle(

                        target,

                        result.results[0].styleId

                    );

                    break;

                case "MULTIPLE":

                    target.innerHTML="";

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

            }

        }

    );

    /**
     * ==========================================
     * Hero
     * ==========================================
     */

    const heroSection =

        document.createElement("div");

    heroSection.className =

        "dashboard-section";

    target.appendChild(

        heroSection

    );

    await renderHeroPanel(

        heroSection,

        context

    );

    /**
     * ==========================================
     * Overview
     * ==========================================
     */

    const overviewSection =

        document.createElement("div");

    overviewSection.className =

        "dashboard-section";

    target.appendChild(

        overviewSection

    );

    await renderOverviewPanel(

        overviewSection,

        context

    );

    /**
     * ==========================================
     * Sales
     * ==========================================
     */

    const salesSection =

        document.createElement("div");

    salesSection.className =

        "dashboard-section";

    target.appendChild(

        salesSection

    );

    await renderSalesPanel(

        salesSection,

        context

    );

    /**
     * ==========================================
     * Inventory
     * ==========================================
     */

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

    /**
     * ==========================================
     * Quality
     * ==========================================
     */

    const qualitySection =

        document.createElement("div");

    qualitySection.className =

        "dashboard-section";

    target.appendChild(

        qualitySection

    );

    await renderQualityPanel(

        qualitySection,

        context

    );

    /**
     * ==========================================
     * Catalogue Family
     * ==========================================
     */

    const catalogueSection =

        document.createElement("div");

    catalogueSection.className =

        "dashboard-section";

    target.appendChild(

        catalogueSection

    );

    await renderCatalogueFamily(

        catalogueSection,

        context,

        async selectedStyleId=>{

            if(

                selectedStyleId===

                context.identity.styleId

            ){

                return;

            }

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

            await openStyle(

                target,

                selectedStyleId

            );

        }

    );

}