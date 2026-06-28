/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Aggregate Engine
 * Version : V1.0
 * =====================================================
 */

export function buildShipmentMap(

    salesRows,

    returnRows

){

    const shipmentMap = new Map();

    // =====================================
    // Gross Sales
    // =====================================

    salesRows.forEach(row=>{

        const styleId = String(

            row.style_id ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        if(!shipmentMap.has(styleId)){

            shipmentMap.set(styleId,{

                styleId,

                brand:

                    row.brand ||

                    "",

                gross:0,

                returnQty:0

            });

        }

        shipmentMap.get(styleId).gross +=

            Number(

                row.qty ||

                0

            );

    });

    // =====================================
    // Returns
    // =====================================

    returnRows.forEach(row=>{

        const styleId = String(

            row.style_id ||

            ""

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