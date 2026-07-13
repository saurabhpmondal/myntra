/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : PO Type Report
 * Version : V1.0
 * =====================================================
 */

import {

    buildGroupedReport

}

from "./buildGroupedReport.js";

/**
 * =====================================================
 * Build PO Type Report
 * =====================================================
 */

export function buildPOTypeReport(

    currentRows=[],

    previousRows=[]

){

    return buildGroupedReport(

        currentRows,

        previousRows,

        {

            field:"poType",

            transform:row=>({

                poType:

                    row.poType

            })

        }

    );

}