/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SOR Shipment Report
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { renderTable } from "../common/table/table.js";

import { getSorShipmentData } from "../../services/sorShipment/sorShipmentService.js";

import { getSorShipmentColumns } from "../../services/sorShipment/sorShipmentColumns.js";

import { exportExcel } from "../../utils/exportExcel.js";

let reportTarget = null;

/**
 * Master dataset
 */

let reportRows = [];

/**
 * Current filtered dataset
 */

let filteredRows = [];

/**
 * ==========================================
 * Render
 * ==========================================
 */

export async function renderSorShipmentReport(target){

    reportTarget = target;

    await createComponent({

        target,

        html:"src/components/sorShipment/sorShipmentReport.html",

        css:"src/components/sorShipment/sorShipmentReport.css"

    });

}

/**
 * ==========================================
 * Refresh Report
 * ==========================================
 */

export async function refreshSorShipmentReport(rows = null){

    if(!reportTarget){

        return;

    }

    if(rows===null){

        reportRows = [...getSorShipmentData()];

        filteredRows = [...reportRows];

    }

    else{

        filteredRows = [...rows];

    }

    await renderSorShipmentTable();

}

/**
 * ==========================================
 * Render Table
 * ==========================================
 */

async function renderSorShipmentTable(){

    reportTarget.innerHTML = "";

    await renderTable({

        target:reportTarget,

        title:"SOR Shipment Recommendation",

        subtitle:`${filteredRows.length.toLocaleString("en-IN")} Styles`,

        columns:getSorShipmentColumns(),

        rows:filteredRows,

        pageSize:50

    });

}

/**
 * ==========================================
 * Get Current Rows
 * ==========================================
 */

export function getFilteredSorShipmentRows(){

    return [...filteredRows];

}

/**
 * ==========================================
 * Search Shipment Report
 * ==========================================
 */

export async function searchSorShipmentReport(keyword){

    const search = String(

        keyword || ""

    )

    .trim()

    .toLowerCase();

    if(!search){

        filteredRows = [...reportRows];

        await renderSorShipmentTable();

        return;

    }

    filteredRows = reportRows.filter(row=>{

        const styleId = String(

            row.styleId || ""

        ).toLowerCase();

        const erpSku = String(

            row.erpSku || ""

        ).toLowerCase();

        return(

            styleId.includes(search) ||

            erpSku.includes(search)

        );

    });

    await renderSorShipmentTable();

}

/**
 * ==========================================
 * Export Shipment Report
 * ==========================================
 */

export function exportSorShipmentReport(){

    if(!filteredRows.length){

        alert("No shipment data available.");

        return;

    }

    exportExcel({

        filename:"SOR Shipment Recommendation",

        columns:getSorShipmentColumns(),

        rows:filteredRows

    });

}