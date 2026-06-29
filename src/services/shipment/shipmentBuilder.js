/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Builder
 * Version : V5.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

export function buildShipmentData(config){

    const styles = {};

    buildSales(styles, config.saleDays);

    buildReturns(styles, config.saleDays);

    buildStock(styles);

    buildRatings(styles);

    buildMaster(styles);

    return Object.values(styles);

}

function getStyle(styles, styleId){

    if(!styles[styleId]){

        styles[styleId]={

            styleId,

            erpSku:"",

            erpStatus:"",

            brand:"",

            launchDate:"",

            rating:0,

            gross:0,

            returns:0,

            stock:0

        };

    }

    return styles[styleId];

}

function buildSales(styles){

    DataStore.sales.forEach(row=>{

        const style=

            getStyle(

                styles,

                row.style_id

            );

        style.brand=

            row.brand||

            style.brand;

        style.gross+=

            Number(

                row.qty||0

            );

    });

}

function buildReturns(styles){

    DataStore.returns.forEach(row=>{

        const style=

            getStyle(

                styles,

                row.style_id

            );

        style.returns++;

    });

}

function buildStock(styles){

    DataStore.sjitStock.forEach(row=>{

        const style=

            getStyle(

                styles,

                row.style_id

            );

        style.stock+=

            Number(

                row.stock_units||0

            );

    });

}

function buildRatings(styles){

    DataStore.traffic.forEach(row=>{

        const style=

            getStyle(

                styles,

                row.style_id

            );

        style.rating=

            Number(

                row.rating||0

            );

    });

}

function buildMaster(styles){

    DataStore.productMaster.forEach(row=>{

        const style=

            getStyle(

                styles,

                row.style_id

            );

        style.erpSku=

            row.erp_sku||

            "";

        style.erpStatus=

            row.status||

            "";

        style.launchDate=

            row.launch_date||

            "";

        if(!style.brand){

            style.brand=

                row.brand||

                "";

        }

    });

}