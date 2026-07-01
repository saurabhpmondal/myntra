/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Metrics Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

/**
 * =====================================================
 * Build Metrics
 * =====================================================
 */

export function buildStyleMetrics(styleId){

    styleId = String(styleId || "").trim();

    // ==========================================
    // Sales
    // ==========================================

    const sales = DataStore.sales.filter(row=>

        String(row.style_id || "").trim()===styleId

    );

    const sale90D = sales.reduce(

        (sum,row)=>

            sum + Number(row.qty || 0),

        0

    );

    // ==========================================
    // Traffic
    // ==========================================

    const traffic =

        DataStore.traffic.find(row=>

            String(row.style_id || "").trim()===styleId

        ) || {};

    const rating = Number(

        traffic.rating || 0

    );

    // ==========================================
    // Returns
    // ==========================================

    const returns =

        DataStore.returns.filter(row=>

            String(row.style_id || "").trim()===styleId

        );

    const customerReturnUnits =

        returns.filter(row=>

            String(row.type || "")
            .toUpperCase()==="RETURN"

        ).length;

    const rtoUnits =

        returns.filter(row=>

            String(row.type || "")
            .toUpperCase()==="RTO"

        ).length;

    const customerReturnPercent =

        sale90D===0

        ?0

        :(customerReturnUnits/sale90D)*100;

    const rtoPercent =

        sale90D===0

        ?0

        :(rtoUnits/sale90D)*100;

    // ==========================================
    // Seller Stock
    // ==========================================

    const sellerStock =

        DataStore.sellerStock

        .filter(row=>

            String(row.style_id || "").trim()===styleId

        )

        .reduce(

            (sum,row)=>

                sum+

                Number(row.stock_units || 0),

            0

        );

    // ==========================================
    // SJIT
    // ==========================================

    const sjitStock =

        DataStore.sjitStock

        .filter(row=>

            String(row.style_id || "").trim()===styleId

        )

        .reduce(

            (sum,row)=>

                sum+

                Number(row.stock_units || 0),

            0

        );

    // ==========================================
    // SOR
    // ==========================================

    const sorStock =

        DataStore.sorStock

        .filter(row=>

            String(row.style_id || "").trim()===styleId

        )

        .reduce(

            (sum,row)=>

                sum+

                Number(row.stock_units || 0),

            0

        );

    const totalStock =

        sellerStock +

        sjitStock +

        sorStock;

    return{

        sale90D,

        rating,

        customerReturnUnits,

        customerReturnPercent,

        rtoUnits,

        rtoPercent,

        sellerStock,

        sjitStock,

        sorStock,

        totalStock

    };

}