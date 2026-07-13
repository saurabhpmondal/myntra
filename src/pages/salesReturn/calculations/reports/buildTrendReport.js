/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Trend Report
 * Version : V1.0
 * =====================================================
 */

import {

    buildGroupedReport

}

from "./buildGroupedReport.js";

/**
 * =====================================================
 * Build Trend Report
 * =====================================================
 */

export function buildTrendReport(

    currentRows=[],

    previousRows=[]

){

    return buildGroupedReport(

        currentRows,

        previousRows,

        {

            field:"monthYear",

            transform:row=>({

                month:

                    row.month,

                year:

                    row.year,

                monthYear:

                    `${row.month} ${row.year}`

            })

        }

    );

}