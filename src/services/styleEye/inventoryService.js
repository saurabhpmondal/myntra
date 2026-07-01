/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Inventory Intelligence Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

export function buildInventory(context){

    if(!context){

        return null;

    }

    const styleId = context.identity.styleId;

    const erpSku = context.identity.erpSku;

    // ==========================================
    // Seller Stock
    // ==========================================

    const sellerStock = DataStore.sellerStock
        .filter(row=>

            String(

                row.erp_sku || ""

            ).trim()===erpSku

        )
        .reduce(

            (sum,row)=>

                sum +

                Number(

                    row.stock_units || 0

                ),

            0

        );

    // ==========================================
    // SJIT Stock
    // ==========================================

    const sjitStock = DataStore.sjitStock
        .filter(row=>

            String(

                row.style_id || ""

            ).trim()===styleId

        )
        .reduce(

            (sum,row)=>

                sum +

                Number(

                    row.sellable_inventory_count || 0

                ),

            0

        );

    // ==========================================
    // SOR Stock
    // ==========================================

    const sorStock = DataStore.sorStock
        .filter(row=>

            String(

                row.style_id || ""

            ).trim()===styleId

        )
        .reduce(

            (sum,row)=>

                sum +

                Number(

                    row.sellable_inventory_count || 0

                ),

            0

        );

    // ==========================================
    // Total Stock
    // ==========================================

    const totalStock =

        sellerStock +

        sjitStock +

        sorStock;

    // ==========================================
    // Sales
    // ==========================================

    const sales = DataStore.sales
        .filter(row=>

            String(

                row.style_id || ""

            ).trim()===styleId

        );

    const totalSale = sales.reduce(

        (sum,row)=>

            sum +

            Number(

                row.qty || 0

            ),

        0

    );

    // ==========================================
    // DRR
    // ==========================================

    const drr =

        totalSale / 90;

    // ==========================================
    // Stock Cover
    // ==========================================

    const stockCover =

        drr===0

        ?

        0

        :

        totalStock / drr;

    // ==========================================
    // Health
    // ==========================================

    let health = "";

    let healthColor = "";

    if(stockCover===0){

        health = "No Stock";

        healthColor = "danger";

    }

    else if(stockCover<=30){

        health = "Low Stock";

        healthColor = "warning";

    }

    else if(stockCover<=90){

        health = "Healthy";

        healthColor = "success";

    }

    else if(stockCover<=180){

        health = "Overstock";

        healthColor = "info";

    }

    else{

        health = "Dead Stock";

        healthColor = "danger";

    }

    // ==========================================
    // Recommendation
    // ==========================================

    let recommendation = "";

    let recommendationColor = "";

    if(stockCover<=30){

        recommendation =

            "Shipment Required";

        recommendationColor =

            "warning";

    }

    else if(stockCover>180){

        recommendation =

            "Recall Required";

        recommendationColor =

            "danger";

    }

    else{

        recommendation =

            "Inventory Balanced";

        recommendationColor =

            "success";

    }

    // ==========================================
    // Return
    // ==========================================

    return{

        sellerStock,

        sjitStock,

        sorStock,

        totalStock,

        totalSale,

        drr,

        stockCover,

        health,

        healthColor,

        recommendation,

        recommendationColor

    };

}