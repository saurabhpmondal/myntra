/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Service
 * Version : V1.0
 * =====================================================
 */

import {

    buildShipmentLookups,

    getMaster,

    getRating,

    getStock

} from "./shipmentLookupEngine.js";

import {

    filterSalesByDays,

    filterReturnsByDays

} from "./shipmentDateEngine.js";

import {

    buildShipmentMap

} from "./shipmentAggregateEngine.js";

import {

    calculateShipment

} from "./shipmentCalculationEngine.js";

import {

    applyShipmentRules

} from "./shipmentRuleEngine.js";

import {

    getShipmentColumns

} from "./shipmentColumnEngine.js";

export function generateShipmentReport(options){

    buildShipmentLookups();

    const salesRows = filterSalesByDays(

        options.saleDays

    );

    const returnRows = filterReturnsByDays(

        options.saleDays

    );

    const shipmentMap = buildShipmentMap(

        salesRows,

        returnRows

    );

    const rows = [];

    let totalShipment = 0;

    let totalRecall = 0;

    let totalNet = 0;

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

        record.brand =

            record.brand ||

            master.brand ||

            "";

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

        totalShipment +=

            record.shipment;

        totalRecall +=

            record.recall;

        totalNet +=

            record.net;

        rows.push(record);

    });

    rows.sort(

        (a,b)=>

            b.shipment-a.shipment ||

            b.recall-a.recall ||

            b.net-a.net

    );

    return{

        columns:

            getShipmentColumns(),

        rows,

        kpis:[

            {

                title:"Total Styles",

                value:rows.length,

                className:"primary"

            },

            {

                title:"Shipment Qty",

                value:totalShipment,

                className:"success"

            },

            {

                title:"Recall Qty",

                value:totalRecall,

                className:"danger"

            },

            {

                title:"Net Sale",

                value:totalNet,

                className:"info"

            }

        ]

    };

}