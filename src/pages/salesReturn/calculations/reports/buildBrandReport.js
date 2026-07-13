/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Brand Report
 * Version : V1.0
 * =====================================================
 */

import {

    buildGroupedReport

}

from "./buildGroupedReport.js";

/**
 * =====================================================
 * Build Brand Report
 * =====================================================
 */

export function buildBrandReport(

    currentRows=[],

    previousRows=[]

){

    return buildGroupedReport(

        currentRows,

        previousRows,

        {

            field:"brand",

            transform:row=>({

                brand:

                    row.brand

            })

        }

    );

}