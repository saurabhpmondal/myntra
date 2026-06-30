/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

export function searchStyle(keyword){

    keyword = String(
        keyword || ""
    )
    .trim()
    .toUpperCase();

    if(!keyword){

        return{

            type:"EMPTY",

            results:[]

        };

    }

    // ==========================================
    // Exact Style ID Search
    // ==========================================

    const styleMatch = DataStore.productMaster.filter(row=>{

        return String(

            row.style_id || ""

        )

        .trim()

        .toUpperCase()

        ===

        keyword;

    });

    if(styleMatch.length){

        return{

            type:"STYLE",

            results:styleMatch.map(buildResult)

        };

    }

    // ==========================================
    // Exact ERP SKU Search
    // ==========================================

    const erpMatch = DataStore.productMaster.filter(row=>{

        return String(

            row.erp_sku || ""

        )

        .trim()

        .toUpperCase()

        ===

        keyword;

    });

    if(erpMatch.length===1){

        return{

            type:"STYLE",

            results:erpMatch.map(buildResult)

        };

    }

    if(erpMatch.length>1){

        return{

            type:"MULTIPLE",

            results:erpMatch.map(buildResult)

        };

    }

    // ==========================================
    // No Match
    // ==========================================

    return{

        type:"NOT_FOUND",

        results:[]

    };

}

/**
 * ==========================================
 * Build Search Result
 * ==========================================
 */

function buildResult(row){

    return{

        styleId:

            row.style_id || "",

        erpSku:

            row.erp_sku || "",

        brand:

            row.brand || "",

        category:

            row.category || "",

        erpStatus:

            row.status || "",

        launchDate:

            row.launch_date || "",

        tp:

            Number(row.tp || 0),

        mrp:

            Number(row.mrp || 0)

    };

}

