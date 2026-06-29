/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Page
 * Version : V5.0
 * =====================================================
 */

import { renderShipmentControls } from "../../components/shipment/shipmentControls.js";

import { renderShipmentReport } from "../../components/shipment/shipmentReport.js";

let shipmentContainer = null;

export async function renderShipment(target){

    shipmentContainer = target;

    shipmentContainer.innerHTML = "";

    const controls = createSection();

    shipmentContainer.appendChild(

        controls

    );

    await renderShipmentControls(

        controls

    );

    const report = createSection();

    shipmentContainer.appendChild(

        report

    );

    await renderShipmentReport(

        report

    );

}

function createSection(){

    const section =

        document.createElement("div");

    section.className =

        "dashboard-section";

    return section;

}