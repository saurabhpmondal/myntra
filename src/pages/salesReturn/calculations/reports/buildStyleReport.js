/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Report
 * Version : V1.0
 * =====================================================
 */

import {

    buildGroupedReport

}

from "./buildGroupedReport.js";

/**
 * =====================================================
 * Build Style Report
 * =====================================================
 */

export function buildStyleReport(

    currentRows=[],

    previousRows=[]

){

    return buildGroupedReport(

        currentRows,

        previousRows,

        {

            field:"styleId",

            transform:row=>({

                styleId:

                    row.styleId,

                brand:

                    row.brand,

                poType:

                    row.poType,

                articleType:

                    row.articleType

            })

        }

    );

}