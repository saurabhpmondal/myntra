/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Rule Engine
 * Version : V1.0
 * =====================================================
 */

import {

    isContinue,

    validReturn,

    validRating,

    isSorBrand

} from "./shipmentHelper.js";

export function applyShipmentRules(

    row,

    shipmentType

){

    row.rule = "Eligible";

    /*
    ==========================================
    Rule 1
    Non Continue
    ==========================================
    */

    if(

        !isContinue(

            row.status

        )

    ){

        row.shipment = 0;

        row.recall = 0;

        row.rule = "Non Continue";

        return row;

    }

    /*
    ==========================================
    Rule 2
    Return >35%
    ==========================================
    */

    if(

        !validReturn(

            row.returnPercentage

        )

    ){

        row.shipment = 0;

        row.recall = 0;

        row.rule = "High Return %";

        return row;

    }

    /*
    ==========================================
    Rule 3
    Rating <3.8
    ==========================================
    */

    if(

        !validRating(

            row.rating

        )

    ){

        row.shipment = 0;

        row.recall = 0;

        row.rule = "Low Rating";

        return row;

    }

    /*
    ==========================================
    Rule 4
    SJIT Restriction
    ==========================================
    */

    if(

        shipmentType==="SJIT"

        &&

        isSorBrand(

            row.brand

        )

    ){

        row.shipment = 0;

        row.recall = 0;

        row.rule = "SOR Brand";

        return row;

    }

    /*
    ==========================================
    Rule 5
    SOR Restriction
    ==========================================
    */

    if(

        shipmentType==="SOR"

        &&

        !isSorBrand(

            row.brand

        )

    ){

        row.shipment = 0;

        row.recall = 0;

        row.rule = "SJIT Brand";

        return row;

    }

    /*
    ==========================================
    Rule 6
    Shipment & Recall
    ==========================================
    */

    if(

        row.shipment>0

    ){

        row.recall=0;

        row.rule="Shipment";

    }

    else if(

        row.recall>0

    ){

        row.shipment=0;

        row.rule="Recall";

    }

    else{

        row.rule="No Action";

    }

    return row;

}