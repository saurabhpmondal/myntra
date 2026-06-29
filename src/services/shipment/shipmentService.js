/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Service
 * Version : V5.1
 * =====================================================
 */

import { DataStore } from "../dataService.js";

import { filterByDays } from "../dateFilterService.js";

import { buildShipmentData } from "./shipmentBuilder.js";

import { calculateShipmentData } from "./shipmentCalculation.js";

import { applyShipmentRules } from "./shipmentRules.js";

let shipmentData = [];

let shipmentConfig = null;

/**
 * ==========================================
 * Generate Shipment
 * ==========================================
 */

export function generateShipment(config){

    console.time("Shipment Generation");

    shipmentConfig = {

        saleDays:Number(config.saleDays),

        targetCover:Number(config.targetCover),

        recallTrigger:Number(config.recallTrigger)

    };

    // ==========================================
    // Filter Sales & Returns
    // ==========================================

    const sales =

        filterByDays(

            DataStore.sales,

            shipmentConfig.saleDays

        );

    const returns =

        filterByDays(

            DataStore.returns,

            shipmentConfig.saleDays

        );

    console.table({

        Sales:sales.length,

        Returns:returns.length,

        SaleDays:shipmentConfig.saleDays

    });

    // ==========================================
    // Build Shipment Data
    // ==========================================

    const rawData =

        buildShipmentData(

            sales,

            returns

        );

    console.log(

        `Builder : ${rawData.length} Styles`

    );

    // ==========================================
    // Calculate Metrics
    // ==========================================

    const calculated =

        calculateShipmentData(

            rawData,

            shipmentConfig

        );

    console.log(

        "Calculation Complete"

    );

    // ==========================================
    // Apply Rules
    // ==========================================

    shipmentData =

        applyShipmentRules(

            calculated,

            shipmentConfig

        );

    console.table({

        Styles:shipmentData.length,

        Shipment:

            shipmentData.filter(

                x=>x.shipment>0

            ).length,

        Recall:

            shipmentData.filter(

                x=>x.recall>0

            ).length

    });

    console.timeEnd(

        "Shipment Generation"

    );

    return shipmentData;

}

/**
 * ==========================================
 * Shipment Data
 * ==========================================
 */

export function getShipmentData(){

    return shipmentData;

}

/**
 * ==========================================
 * Shipment Config
 * ==========================================
 */

export function getShipmentConfig(){

    return shipmentConfig;

}

/**
 * ==========================================
 * Clear
 * ==========================================
 */

export function clearShipmentData(){

    shipmentData=[];

    shipmentConfig=null;

}