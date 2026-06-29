/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Report
 * Version : V5.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

export async function renderShipmentReport(target){

    await createComponent({

        target,

        html:"src/components/shipment/shipmentReport.html",

        css:"src/components/shipment/shipmentReport.css"

    });

}