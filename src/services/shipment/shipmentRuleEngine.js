/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Rule Engine
 * Version : V2.0
 * =====================================================
 */

const SOR_BRANDS = [

    "KALINI",

    "MITERA"

];

function isSorBrand(brand){

    return SOR_BRANDS.includes(

        String(

            brand || ""

        )

        .trim()

        .toUpperCase()

    );

}

export function applyShipmentRules(

    record,

    shipmentType

){

    record.shipmentReason = "";

    record.recallReason = "";

    /* ==========================================
       CONTINUE ONLY
    ========================================== */

    if(

        String(

            record.status || ""

        )

        .trim()

        .toUpperCase()

        !==

        "CONTINUE"

    ){

        record.shipment = 0;

        record.shipmentReason =

            "Non Continue Style";

    }

    /* ==========================================
       RETURN %
    ========================================== */

    if(

        record.returnPercentage > 35

    ){

        record.shipment = 0;

        record.shipmentReason =

            "Return > 35%";

    }

    /* ==========================================
       RATING
    ========================================== */

    if(

        Number(

            record.rating || 0

        ) < 3.8

    ){

        record.shipment = 0;

        record.shipmentReason =

            "Rating < 3.8";

    }

    /* ==========================================
       BRAND RULE
    ========================================== */

    const sorBrand =

        isSorBrand(

            record.brand

        );

    if(

        shipmentType === "SJIT"

        &&

        sorBrand

    ){

        record.shipment = 0;

        record.shipmentReason =

            "SOR Brand";

    }

    if(

        shipmentType === "SOR"

        &&

        !sorBrand

    ){

        record.shipment = 0;

        record.shipmentReason =

            "SJIT Brand";

    }

    /* ==========================================
       SHIPMENT / RECALL
    ========================================== */

    if(

        record.shipment > 0

    ){

        record.recall = 0;

        record.recallReason = "";

    }

    if(

        record.recall > 0

    ){

        record.shipment = 0;

        record.shipmentReason = "";

    }

    return record;

}