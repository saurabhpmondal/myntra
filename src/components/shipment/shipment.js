/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Planner
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { renderTable } from "../common/table/table.js";

import { renderExportButton } from "../common/exportButton/exportButton.js";

import { generateShipmentReport } from "../../services/shipment/shipmentService.js";

let shipmentReport = null;

export async function renderShipment(target){

    await createComponent({

        target,

        html:"src/components/shipment/shipment.html",

        css:"src/components/shipment/shipment.css"

    });

    bindEvents(target);

}

function bindEvents(target){

    const generateButton =

        target.querySelector("#generate-shipment");

    generateButton.addEventListener(

        "click",

        ()=>generate(target)

    );

}

async function generate(target){

    const saleDays = Number(

        target.querySelector(

            "#shipment-sale-days"

        ).value

    );

    const targetCover = Number(

        target.querySelector(

            "#shipment-target-cover"

        ).value

    );

    const recallTrigger = Number(

        target.querySelector(

            "#shipment-recall-trigger"

        ).value

    );

    const shipmentType =

        target.querySelector(

            "#shipment-type"

        ).value;

    shipmentReport = generateShipmentReport({

        saleDays,

        targetCover,

        recallTrigger,

        shipmentType

    });

    target

        .querySelector("#shipment-result")

        .classList.remove("hidden");

    renderInfo(

        target,

        saleDays,

        targetCover,

        recallTrigger,

        shipmentType

    );

    await renderExportButton({

        target:

            target.querySelector(

                "#shipment-export"

            ),

        filename:

            `${shipmentType}_Shipment_Report`,

        columns:

            shipmentReport.columns,

        rows:

            shipmentReport.rows

    });

    await renderTable({

        target:

            target.querySelector(

                "#shipment-table"

            ),

        title:

            `${shipmentType} Shipment Planner`,

        subtitle:

            `${shipmentReport.rows.length} Styles`,

        columns:

            shipmentReport.columns,

        rows:

            shipmentReport.rows

    });

}

function renderInfo(

    target,

    saleDays,

    targetCover,

    recallTrigger,

    shipmentType

){

    target.querySelector(

        "#shipment-info"

    ).innerHTML = `

        <strong>

            Shipment Type :

        </strong>

        ${shipmentType}

        &nbsp;&nbsp;|

        &nbsp;&nbsp;

        <strong>

            Sale Days :

        </strong>

        ${saleDays}

        &nbsp;&nbsp;|

        &nbsp;&nbsp;

        <strong>

            Target Cover :

        </strong>

        ${targetCover}

        Days

        &nbsp;&nbsp;|

        &nbsp;&nbsp;

        <strong>

            Recall Trigger :

        </strong>

        ${recallTrigger}

        Days

    `;

}