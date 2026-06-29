/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Service
 * Version : V5.0
 * =====================================================
 */

import { buildShipmentData } from "./shipmentBuilder.js";

import { calculateShipmentData } from "./shipmentCalculation.js";

import { applyShipmentRules } from "./shipmentRules.js";

let shipmentData = [];

export function generateShipment(config){

    console.time("Shipment Generation");

    // ==========================================
    // Build Raw Data
    // ==========================================

    const rawData =

        buildShipmentData(config);

    // ==========================================
    // Calculate Metrics
    // ==========================================

    const calculated =

        calculateShipmentData(

            rawData,

            config

        );

    // ==========================================
    // Apply Shipment Rules
    // ==========================================

    shipmentData =

        applyShipmentRules(

            calculated,

            config

        );

    console.table({

        Styles: shipmentData.length,

        SaleDays: config.saleDays,

        TargetCover: config.targetCover,

        RecallTrigger: config.recallTrigger

    });

    console.timeEnd(

        "Shipment Generation"

    );

    return shipmentData;

}

export function getShipmentData(){

    return shipmentData;

}

export function clearShipmentData(){

    shipmentData = [];

}