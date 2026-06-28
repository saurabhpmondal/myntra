/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../data/dataService.js";

import {
    buildShipmentLookups,
    getMaster,
    getRating,
    getSales,
    getReturns,
    getStock
} from "./shipmentLookupEngine.js";

import { calculateShipment } from "./shipmentCalculationEngine.js";
import { applyShipmentRules } from "./shipmentRuleEngine.js";

const DAY_MS = 86400000;

export const ShipmentReport = {

    rows: [],

    columns: [],

    kpis: []

};

export function getShipmentReport(options){

    buildShipmentLookups();

    ShipmentReport.rows = [];

    ShipmentReport.columns = [];

    ShipmentReport.kpis = [];

    return ShipmentReport;

}

function getLatestSaleDate(){

    let latest = 0;

    DataStore.sales.forEach(row=>{

        const day = Number(row.date || 0);

        const month = Number(row.month || 0);

        const year = Number(row.year || 0);

        if(!day || !month || !year){

            return;

        }

        const value = new Date(

            year,

            month - 1,

            day

        ).getTime();

        if(value > latest){

            latest = value;

        }

    });

    return latest;

}

function filterSalesByPeriod(saleDays){

    const latestDate = getLatestSaleDate();

    const minDate = latestDate - ((Number(saleDays)-1) * DAY_MS);

    return DataStore.sales.filter(row=>{

        const day = Number(row.date || 0);

        const month = Number(row.month || 0);

        const year = Number(row.year || 0);

        if(!day || !month || !year){

            return false;

        }

        const rowDate = new Date(

            year,

            month - 1,

            day

        ).getTime();

        return rowDate >= minDate && rowDate <= latestDate;

    });

}

function filterReturnsByPeriod(saleDays){

    const latestDate = getLatestSaleDate();

    const minDate = latestDate - ((Number(saleDays)-1) * DAY_MS);

    return DataStore.returns.filter(row=>{

        const day = Number(row.date || 0);

        const month = Number(row.month || 0);

        const year = Number(row.year || 0);

        if(!day || !month || !year){

            return false;

        }

        const rowDate = new Date(

            year,

            month - 1,

            day

        ).getTime();

        return rowDate >= minDate && rowDate <= latestDate;

    });

}

function buildShipmentMap(salesRows,returnRows){

    const shipmentMap = new Map();

    // ===========================
    // Gross Sale
    // ===========================

    salesRows.forEach(row=>{

        const styleId = String(

            row.style_id || ""

        ).trim();

        if(!styleId){

            return;

        }

        if(!shipmentMap.has(styleId)){

            shipmentMap.set(styleId,{

                styleId,

                brand:row.brand || "",

                gross:0,

                returnQty:0

            });

        }

        shipmentMap.get(styleId).gross +=

            Number(

                row.qty || 0

            );

    });

    // ===========================
    // Returns
    // ===========================

    returnRows.forEach(row=>{

        const styleId = String(

            row.style_id || ""

        ).trim();

        if(!styleId){

            return;

        }

        if(!shipmentMap.has(styleId)){

            shipmentMap.set(styleId,{

                styleId,

                brand:"",

                gross:0,

                returnQty:0

            });

        }

        shipmentMap.get(styleId).returnQty++;

    });

    return shipmentMap;

}

function buildShipmentRows(

    shipmentMap,

    options

){

    const rows = [];

    shipmentMap.forEach(record=>{

        const master =

            getMaster(

                record.styleId

            );

        record.erpSku =

            master.erpSku || "";

        record.status =

            master.status || "";

        record.launchDate =

            master.launchDate || "";

        record.rating =

            getRating(

                record.styleId

            );

        record.stock =

            getStock(

                record.styleId,

                options.shipmentType

            );

        Object.assign(

            record,

            calculateShipment(

                record,

                options

            )

        );

        applyShipmentRules(

            record,

            options.shipmentType

        );

        rows.push(record);

    });

    rows.sort(

        (a,b)=>

            b.shipment-a.shipment ||

            b.recall-a.recall ||

            b.net-a.net

    );

    return rows;

}

function buildKPIs(rows){

    const kpis = [

        {
            title:"Total Styles",
            value:0,
            className:"primary"
        },

        {
            title:"Shipment Qty",
            value:0,
            className:"success"
        },

        {
            title:"Recall Qty",
            value:0,
            className:"danger"
        },

        {
            title:"Net Sale",
            value:0,
            className:"info"
        }

    ];

    rows.forEach(row=>{

        kpis[0].value++;

        kpis[1].value += Number(

            row.shipment || 0

        );

        kpis[2].value += Number(

            row.recall || 0

        );

        kpis[3].value += Number(

            row.net || 0

        );

    });

    return kpis;

}

function buildColumns(){

    return [

        {
            key:"styleId",
            label:"Style ID"
        },

        {
            key:"erpSku",
            label:"ERP SKU"
        },

        {
            key:"status",
            label:"ERP Status"
        },

        {
            key:"brand",
            label:"Brand"
        },

        {
            key:"launchDate",
            label:"Launch Date"
        },

        {
            key:"rating",
            label:"Rating",

            renderer:value=>

                Number(value||0).toFixed(1)

        },

        {
            key:"gross",
            label:"Gross"
        },

        {
            key:"returnPercentage",
            label:"Return %",

            renderer:value=>

                `${Number(value||0).toFixed(2)}%`

        },

        {
            key:"net",
            label:"Net"
        },

        {
            key:"drr",
            label:"DRR",

            renderer:value=>

                Number(value||0).toFixed(2)

        },

        {
            key:"stock",
            label:"Stock"
        },

        {
            key:"sc",
            label:"SC",

            renderer:value=>

                Number(value||0).toFixed(2)

        },

        {
            key:"projection",
            label:"Projection"
        },

        {
            key:"shipment",
            label:"Shipment"
        },

        {
            key:"recall",
            label:"Recall"
        }

    ];

}

