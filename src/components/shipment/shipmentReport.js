/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Report
 * Version : V5.1
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { renderTable } from "../common/table/table.js";

import { getShipmentData } from "../../services/shipment/shipmentService.js";

import { getShipmentColumns } from "../../services/shipment/shipmentColumns.js";

let reportTarget = null;

export async function renderShipmentReport(target){

    reportTarget = target;

    await createComponent({

        target,

        html:"src/components/shipment/shipmentReport.html",

        css:"src/components/shipment/shipmentReport.css"

    });

}

export async function refreshShipmentReport(){

    if(!reportTarget){

        return;

    }

    const rows = getShipmentData();

    reportTarget.innerHTML = "";

    await renderTable({

        target:reportTarget,

        title:"SJIT Shipment Recommendation",

        subtitle:`${rows.length} Styles`,

        columns:getShipmentColumns(),

        rows,

        pageSize:50

    });

}