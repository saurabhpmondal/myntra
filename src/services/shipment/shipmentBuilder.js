/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Builder
 * Version : V5.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

export function buildShipmentData(){

    const styles = {};

    // ==========================================
    // Sales
    // ==========================================

    DataStore.sales.forEach(row=>{

        const styleId = String(row.style_id || "").trim();

        if(!styleId){

            return;

        }

        if(!styles[styleId]){

            styles[styleId] = createStyle(styleId);

        }

        styles[styleId].gross +=

            Number(row.qty || 0);

        if(!styles[styleId].brand){

            styles[styleId].brand = row.brand || "";

        }

    });

    // ==========================================
    // Returns
    // ==========================================

    DataStore.returns.forEach(row=>{

        const styleId = String(row.style_id || "").trim();

        if(!styleId){

            return;

        }

        if(!styles[styleId]){

            styles[styleId] = createStyle(styleId);

        }

        styles[styleId].returns +=

            1;

    });

    // ==========================================
    // SJIT Stock
    // ==========================================

    DataStore.sjitStock.forEach(row=>{

        const styleId = String(row.style_id || "").trim();

        if(!styleId){

            return;

        }

        if(!styles[styleId]){

            styles[styleId] = createStyle(styleId);

        }

        styles[styleId].stock +=

            Number(row.stock_units || 0);

    });

    // ==========================================
    // Product Master
    // ==========================================

    DataStore.productMaster.forEach(row=>{

        const styleId = String(row.style_id || "").trim();

        if(!styleId){

            return;

        }

        if(!styles[styleId]){

            styles[styleId] = createStyle(styleId);

        }

        styles[styleId].erpSku =

            row.erp_sku || "";

        styles[styleId].erpStatus =

            row.status || "";

        styles[styleId].launchDate =

            row.launch_date || "";

    });

    // ==========================================
    // Traffic Rating
    // ==========================================

    DataStore.traffic.forEach(row=>{

        const styleId = String(row.style_id || "").trim();

        if(!styleId){

            return;

        }

        if(!styles[styleId]){

            styles[styleId] = createStyle(styleId);

        }

        styles[styleId].rating =

            Number(row.rating || 0);

    });

    return Object.values(styles);

}

function createStyle(styleId){

    return{

        styleId,

        erpSku:"",

        erpStatus:"",

        brand:"",

        launchDate:"",

        rating:0,

        gross:0,

        returns:0,

        stock:0

    };

}