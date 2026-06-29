/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Controls
 * Version : V5.3
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { generateShipment } from "../../services/shipment/shipmentService.js";

import {

    refreshShipmentReport,

    searchShipmentReport,

    exportShipmentReport

} from "./shipmentReport.js";

let searchTimer = null;

export async function renderShipmentControls(target){

    await createComponent({

        target,

        html:"src/components/shipment/shipmentControls.html",

        css:"src/components/shipment/shipmentControls.css"

    });

    bindEvents(target);

}

function bindEvents(target){

    const generateButton =

        target.querySelector("#generateShipment");

    const searchBox =

        target.querySelector("#shipmentSearch");

    const exportButton =

        target.querySelector("#exportShipment");

    const actions =

        target.querySelector("#shipmentActions");

    if(!generateButton){

        console.error(

            "Generate Shipment button not found."

        );

        return;

    }

    // ==========================================
    // Search (300ms Debounce)
    // ==========================================

    if(searchBox){

        searchBox.oninput = ()=>{

            clearTimeout(searchTimer);

            searchTimer = setTimeout(async ()=>{

                await searchShipmentReport(

                    searchBox.value

                );

            },300);

        };

    }

    // ==========================================
    // Export
    // ==========================================

    if(exportButton){

        exportButton.onclick = ()=>{

            exportShipmentReport();

        };

    }

}