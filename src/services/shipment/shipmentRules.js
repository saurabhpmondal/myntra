/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Rule Engine
 * Version : V5.0
 * =====================================================
 */

export function applyShipmentRules(

    rows,

    config

){

    return rows.map(row=>{

        let shipment = 0;

        let recall = 0;

        let remark = "";

        // =====================================
        // Recall Check (Highest Priority)
        // =====================================

        if(

            row.sc >

            config.recallTrigger

        ){

            recall = Math.max(

                0,

                Math.round(

                    row.stock -

                    (

                        row.drr *

                        config.recallTrigger

                    )

                )

            );

            remark =

                "Recall Generated";

            return{

                ...row,

                shipment,

                recall,

                remark

            };

        }

        // =====================================
        // Projection
        // =====================================

        shipment =

            Math.max(

                0,

                Math.round(

                    row.projection

                )

            );

        if(shipment===0){

            return{

                ...row,

                shipment:0,

                recall:0,

                remark:

                    "No Projection Required"

            };

        }

        // =====================================
        // ERP Status
        // =====================================

        if(

            String(

                row.erpStatus

            ).toUpperCase()

            !==

            "CONTINUE"

        ){

            return{

                ...row,

                shipment:0,

                recall:0,

                remark:

                    "ERP Status: Non Continue"

            };

        }

        // =====================================
        // Return %
        // =====================================

        if(

            row.returnPercent >

            35

        ){

            return{

                ...row,

                shipment:0,

                recall:0,

                remark:

                    "High Return % (>35%)"

            };

        }

        // =====================================
        // Rating
        // =====================================

        if(

            row.rating > 0 &&

            row.rating < 3.8

        ){

            return{

                ...row,

                shipment:0,

                recall:0,

                remark:

                    "Low Rating (<3.8)"

            };

        }

        // =====================================
        // Restricted Brands
        // =====================================

        const brand =

            String(

                row.brand || ""

            )

            .trim()

            .toUpperCase();

        if(

            brand==="KALINI" ||

            brand==="MITERA"

        ){

            return{

                ...row,

                shipment:0,

                recall:0,

                remark:

                    `Brand Restricted (${row.brand})`

            };

        }

        // =====================================
        // Ready
        // =====================================

        return{

            ...row,

            shipment,

            recall:0,

            remark:

                "Shipment Recommended"

        };

    });

}