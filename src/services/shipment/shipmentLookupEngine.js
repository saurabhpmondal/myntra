/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Lookup Engine
 * Version : V2.0
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

/* ==========================================
   MASTER
========================================== */

function buildMasterLookup(){

    DataStore.productMaster.forEach(row=>{

        const styleId=String(

            row.style_id ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        Lookups.master.set(styleId,{

            erpSku:

                row.erp_sku ||

                "",

            status:

                row.status ||

                "",

            launchDate:

                row.launch_date ||

                "",

            brand:

                row.brand ||

                "",

            articleType:

                row.article_type ||

                ""

        });

    });

}

/* ==========================================
   RATING
========================================== */

function buildRatingLookup(){

    DataStore.traffic.forEach(row=>{

        const styleId=String(

            row.style_id ||

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

/* ==========================================
   STOCK
========================================== */

function buildStockLookup(){

    DataStore.sjitStock.forEach(row=>{

        const styleId=String(

            row.style_id ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=

            Number(

                row.sellable_inventory_count ||

                row.inventory_count ||

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

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=

            Number(

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