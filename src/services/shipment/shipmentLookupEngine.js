/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Lookup Engine
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

const ShipmentLookup={

    master:new Map(),

    rating:new Map(),

    sjit:new Map(),

    sor:new Map()

};

export function buildShipmentLookups(){

    ShipmentLookup.master.clear();

    ShipmentLookup.rating.clear();

    ShipmentLookup.sjit.clear();

    ShipmentLookup.sor.clear();

    buildMaster();

    buildRatings();

    buildSjit();

    buildSor();

}

function buildMaster(){

    DataStore.productMaster.forEach(row=>{

        const styleId=String(

            row.style_id||""

        ).trim();

        if(!styleId){

            return;

        }

        ShipmentLookup.master.set(

            styleId,

            {

                styleId,

                erpSku:

                    row.erp_sku||"",

                brand:

                    row.brand||"",

                status:

                    row.status||"",

                articleType:

                    row.article_type||"",

                launchDate:

                    row.launch_date||""

            }

        );

    });

}

function buildRatings(){

    DataStore.traffic.forEach(row=>{

        const styleId=String(

            row.style_id||""

        ).trim();

        if(!styleId){

            return;

        }

        ShipmentLookup.rating.set(

            styleId,

            Number(

                row.rating||0

            )

        );

    });

}

function buildSjit(){

    DataStore.sjitStock.forEach(row=>{

        const styleId=String(

            row.style_id||""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=Number(

            row.sellable_inventory_count||

            row.inventory_count||

            0

        );

        ShipmentLookup.sjit.set(

            styleId,

            (

                ShipmentLookup.sjit.get(styleId)

                ||

                0

            )

            +

            qty

        );

    });

}

function buildSor(){

    DataStore.sorStock.forEach(row=>{

        const styleId=String(

            row.style_id||""

        ).trim();

        if(!styleId){

            return;

        }

        ShipmentLookup.sor.set(

            styleId,

            (

                ShipmentLookup.sor.get(styleId)

                ||

                0

            )

            +

            Number(

                row.units||0

            )

        );

    });

}

export function getMaster(styleId){

    return(

        ShipmentLookup.master.get(

            String(styleId)

        )

        ||

        {}

    );

}

export function getRating(styleId){

    return(

        ShipmentLookup.rating.get(

            String(styleId)

        )

        ||

        0

    );

}

export function getStock(

    styleId,

    shipmentType

){

    if(

        shipmentType==="SOR"

    ){

        return(

            ShipmentLookup.sor.get(

                String(styleId)

            )

            ||

            0

        );

    }

    return(

        ShipmentLookup.sjit.get(

            String(styleId)

        )

        ||

        0

    );

}