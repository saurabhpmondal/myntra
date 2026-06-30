/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Context Builder
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

/**
 * =====================================================
 * Build Complete Style Context
 * =====================================================
 */

export function buildStyleContext(styleId){

    styleId = String(
        styleId || ""
    ).trim();

    const product = DataStore.productMaster.find(row=>{

        return String(
            row.style_id || ""
        ).trim() === styleId;

    });

    if(!product){

        return null;

    }

    return{

        identity : buildIdentity(product),

        pricing : buildPricing(product),

        sales : {},

        inventory : {},

        quality : {},

        performance : {},

        related : {},

        alerts : [],

        ai : {}

    };

}

/**
 * =====================================================
 * Identity
 * =====================================================
 */

function buildIdentity(product){

    return{

        styleId :

            product.style_id || "",

        erpSku :

            product.erp_sku || "",

        brand :

            product.brand || "",

        category :

            product.article_type || "",

        erpStatus :

            product.status || "",

        launchDate :

            product.launch_date || "",

        liveDate :

            product.live_date || ""

    };

}

/**
 * =====================================================
 * Pricing
 * =====================================================
 */

function buildPricing(product){

    return{

        mrp :

            Number(
                product.mrp || 0
            ),

        tp :

            Number(
                product.tp || 0
            )

    };

}