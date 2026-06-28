/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Lookup Engine
 * Version : V1.1
 * =====================================================
 */

import { DataStore } from "../data/dataService.js";

const Lookups={

    master:new Map(),

    rating:new Map(),

    sjit:new Map(),

    sor:new Map()

};

export function buildShipmentLookups(){

    Lookups.master.clear();

    Lookups.rating.clear();

    Lookups.sjit.clear();

    Lookups.sor.clear();

    buildMasterLookup();

    buildRatingLookup();

    buildStockLookup();

}

function buildMasterLookup(){

    DataStore.productMaster.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        Lookups.master.set(styleId,{

            erpSku:

                row.erp_sku ||

                row.erpSku ||

                "",

            status:

                row.status ||

                "",

            launchDate:

                row.launch_date ||

                row.launchDate ||

                ""

        });

    });

}

function buildRatingLookup(){

    DataStore.traffic.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        Lookups.rating.set(

            styleId,

            Number(

                row.rating ||

                0

            )

        );

    });

}

function buildStockLookup(){

    DataStore.sjitStock.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=Number(

            row.stock_units ||

            row.units ||

            0

        );

        Lookups.sjit.set(

            styleId,

            (

                Lookups.sjit.get(styleId)

                ||

                0

            )

            +

            qty

        );

    });

    DataStore.sorStock.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=Number(

            row.stock_units ||

            row.units ||

            0

        );

        Lookups.sor.set(

            styleId,

            (

                Lookups.sor.get(styleId)

                ||

                0

            )

            +

            qty

        );

    });

}

/* ==========================================
   GETTERS
========================================== */

export function getMaster(styleId){

    return(

        Lookups.master.get(

            String(styleId)

        )

        ||

        {}

    );

}

export function getRating(styleId){

    return(

        Lookups.rating.get(

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

    if(shipmentType==="SOR"){

        return(

            Lookups.sor.get(

                String(styleId)

            )

            ||

            0

        );

    }

    return(

        Lookups.sjit.get(

            String(styleId)

        )

        ||

        0

    );

}