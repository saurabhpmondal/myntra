/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Projection Summary Service
 * Version : V1.0
 * =====================================================
 */

import { getFilteredSales } from "./filterService.js";
import { getComparisonData } from "./comparisonService.js";
import { projectMetric } from "./projectionService.js";

export function getProjectionSummary(){

    const rows = getFilteredSales();

    const {

        previousPeriod,
        previousSales

    } = getComparisonData();

    // -------------------------
    // Metric Helpers
    // -------------------------

    const total = projectMetric(rows,"qty");

    const gmv = projectMetric(rows,"final_amount");

    // -------------------------
    // PO Type
    // -------------------------

    const ppmp = projectMetric(

        rows.filter(r=>r.po_type==="PPMP"),

        "qty"

    );

    const sjit = projectMetric(

        rows.filter(r=>r.po_type==="SJIT"),

        "qty"

    );

    const sor = projectMetric(

        rows.filter(r=>r.po_type==="SOR"),

        "qty"

    );

    // -------------------------
    // Brands
    // -------------------------

    const brands={};

    [...new Set(rows.map(r=>r.brand))]
        .sort()
        .forEach(brand=>{

            brands[brand]=projectMetric(

                rows.filter(r=>r.brand===brand),

                "qty"

            );

        });

    // -------------------------
    // Previous Month
    // -------------------------

    const previous={

        total:sum(previousSales,"qty"),

        gmv:sum(previousSales,"final_amount"),

        ppmp:sum(
            previousSales.filter(r=>r.po_type==="PPMP"),
            "qty"
        ),

        sjit:sum(
            previousSales.filter(r=>r.po_type==="SJIT"),
            "qty"
        ),

        sor:sum(
            previousSales.filter(r=>r.po_type==="SOR"),
            "qty"
        ),

        brands:{}

    };

    Object.keys(brands).forEach(brand=>{

        previous.brands[brand]=sum(

            previousSales.filter(r=>r.brand===brand),

            "qty"

        );

    });

    return{

        total,
        gmv,
        ppmp,
        sjit,
        sor,
        brands,
        previousPeriod,
        previous

    };

}

function sum(rows,column){

    return rows.reduce(

        (a,b)=>

            a+Number(

                b[column]||0

            ),

        0

    );

}