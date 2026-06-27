/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Projection Summary Service
 * Version : V1.1
 * =====================================================
 */

import { getReportRows } from "./reportHelper.js";
import { getComparisonData } from "./comparisonService.js";
import { projectMetric } from "./projectionService.js";

export function getProjectionSummary(){

    const rows = getReportRows();

    const {

        previousPeriod,

        previousSales

    } = getComparisonData();

    // -----------------------
    // Current Month
    // -----------------------

    const total = projectMetric(rows,"qty");

    const gmv = projectMetric(rows,"final_amount");

    const ppmp = projectMetric(

        rows.filter(r=>

            String(r.po_type).toUpperCase()==="PPMP"

        ),

        "qty"

    );

    const sjit = projectMetric(

        rows.filter(r=>

            String(r.po_type).toUpperCase()==="SJIT"

        ),

        "qty"

    );

    const sor = projectMetric(

        rows.filter(r=>

            String(r.po_type).toUpperCase()==="SOR"

        ),

        "qty"

    );

    // -----------------------
    // Brand Projection
    // -----------------------

    const brands = {};

    [...new Set(rows.map(r=>r.brand))]
        .sort()
        .forEach(brand=>{

            brands[brand] = projectMetric(

                rows.filter(r=>r.brand===brand),

                "qty"

            );

        });

    // -----------------------
    // Previous Month
    // -----------------------

    const previousRows = previousSales.map(row=>{

        const current = rows.find(

            r=>r.style_id===row.style_id

        );

        return{

            ...row,

            brand:

                current?.brand ||

                row.brand ||

                "Unknown"

        };

    });

    const previous = {

        total: sum(previousRows,"qty"),

        gmv: sum(previousRows,"final_amount"),

        ppmp: sum(

            previousRows.filter(r=>

                String(r.po_type).toUpperCase()==="PPMP"

            ),

            "qty"

        ),

        sjit: sum(

            previousRows.filter(r=>

                String(r.po_type).toUpperCase()==="SJIT"

            ),

            "qty"

        ),

        sor: sum(

            previousRows.filter(r=>

                String(r.po_type).toUpperCase()==="SOR"

            ),

            "qty"

        ),

        brands:{}

    };

    Object.keys(brands).forEach(brand=>{

        previous.brands[brand] = sum(

            previousRows.filter(r=>r.brand===brand),

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

        previous,

        previousPeriod

    };

}

function sum(rows,column){

    return rows.reduce(

        (total,row)=>

            total + Number(row[column] || 0),

        0

    );

}