/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Return Reason Report
 * Version : V1.0
 * =====================================================
 */

import {

    buildGroupedReport

}

from "./buildGroupedReport.js";

/**
 * =====================================================
 * Build Return Reason Report
 * =====================================================
 */

export function buildReturnReasonReport(

    currentRows=[],

    previousRows=[]

){

    const current=

        currentRows.filter(

            row=>

                row.isCXReturn

        );

    const previous=

        previousRows.filter(

            row=>

                row.isCXReturn

        );

    return buildGroupedReport(

        current,

        previous,

        {

            field:"returnReason",

            transform:row=>({

                returnReason:

                    row.returnReason||

                    "Unknown"

            })

        }

    );

}