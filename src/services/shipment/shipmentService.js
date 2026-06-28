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