/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Lookup Engine
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../data/dataService.js";

const Lookups={

    master:new Map(),

    rating:new Map(),

    sales:new Map(),

    returns:new Map(),

    sjit:new Map(),

    sor:new Map()

};

export function buildShipmentLookups(){

    Lookups.master.clear();

    Lookups.rating.clear();

    Lookups.sales.clear();

    Lookups.returns.clear();

    Lookups.sjit.clear();

    Lookups.sor.clear();

    buildMasterLookup();

    buildRatingLookup();

    buildSalesLookup();

    buildReturnLookup();

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

function buildSalesLookup(){

    DataStore.sales.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const current=

            Lookups.sales.get(styleId) ||

            {

                units:0,

                brand:""

            };

        current.units+=Number(

            row.qty ||

            row.units ||

            0

        );

        if(!current.brand){

            current.brand=

                row.brand ||

                "";

        }

        Lookups.sales.set(

            styleId,

            current

        );

    });

}

function buildReturnLookup(){

    DataStore.returns.forEach(row=>{

        const styleId=String(

            row.style_id ||

            row.styleId ||

            ""

        ).trim();

        if(!styleId){

            return;

        }

        const qty=

            Number(

                row.qty ||

                row.units ||

                1

            );

        Lookups.returns.set(

            styleId,

            (

                Lookups.returns.get(styleId)

                ||

                0

            )

            +

            qty

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

export function getSales(styleId){

    return(

        Lookups.sales.get(

            String(styleId)

        )

        ||

        {

            units:0,

            brand:""

        }

    );

}

export function getReturns(styleId){

    return(

        Lookups.returns.get(

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