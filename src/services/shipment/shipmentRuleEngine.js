/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Rule Engine
 * Version : V1.0
 * =====================================================
 */

const SOR_BRANDS=[

    "KALINI",

    "MITERA"

];

function isSorBrand(brand){

    return SOR_BRANDS.includes(

        String(

            brand||""

        )

        .trim()

        .toUpperCase()

    );

}

export function applyShipmentRules(

    row,

    shipmentType

){

    row.shipmentReason="";

    const status=String(

        row.status||""

    )

    .trim()

    .toUpperCase();

    if(

        status!=="CONTINUE"

    ){

        row.shipment=0;

        row.shipmentReason=

            "Non Continue";

    }

    if(

        row.returnPercentage>35

    ){

        row.shipment=0;

        row.shipmentReason=

            "High Return %";

    }

    if(

        Number(

            row.rating||0

        )<3.8

    ){

        row.shipment=0;

        row.shipmentReason=

            "Low Rating";

    }

    const sorBrand=

        isSorBrand(

            row.brand

        );

    if(

        shipmentType==="SJIT"

        &&

        sorBrand

    ){

        row.shipment=0;

        row.shipmentReason=

            "SOR Brand";

    }

    if(

        shipmentType==="SOR"

        &&

        !sorBrand

    ){

        row.shipment=0;

        row.shipmentReason=

            "SJIT Brand";

    }

    return row;

}