/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Region Report Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderTable

}

from "../../../components/common/table/table.js";

export async function renderRegionReport(

    target,

    rows

){

    await renderTable({

        target,

        title:"Regional Performance",

        columns:[

            {

                key:"region",

                label:"Region"

            },

            {

                key:"soldQty",

                label:"Sold Qty"

            },

            {

                key:"contribution",

                label:"Contribution %"

            }

        ],

        rows

    });

}