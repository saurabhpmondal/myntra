/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Calculation Engine
 * Version : V1.0
 * =====================================================
 */

import {

    grossSale,

    returnPercent,

    netSale,

    drr,

    stockCover,

    projection,

    recall,

    shipment

} from "./shipmentHelper.js";

export function calculateShipment(record,config){

    const gross = grossSale(

        record.gross

    );

    const returnQty =

        record.returnQty || 0;

    const returnPercentage =

        returnPercent(

            gross,

            returnQty

        );

    const net =

        netSale(

            gross,

            returnQty

        );

    const drrValue =

        drr(

            net,

            config.saleDays

        );

    const stock =

        record.stock || 0;

    const sc =

        stockCover(

            stock,

            drrValue

        );

    const projectionQty =

        projection(

            drrValue,

            config.targetCover,

            stock

        );

    const recallQty =

        recall(

            stock,

            drrValue,

            config.recallTrigger

        );

    let shipmentQty =

        shipment(

            projectionQty

        );

    return{

        gross,

        returnQty,

        returnPercentage,

        net,

        drr:drrValue,

        stock,

        sc,

        projection:projectionQty,

        shipment:shipmentQty,

        recall:recallQty

    };

}