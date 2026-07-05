/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : FC Report Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderTable

}

from "../../../components/common/table/table.js";

export async function renderFCReport(

    target,

    rows

){

    await renderTable({

        target,

        title:"FC Intelligence",

        columns:[

            {

                key:"fc",

                label:"FC"

            },

            {

                key:"region",

                label:"Region"

            },

            {

                key:"stock",

                label:"Stock"

            },

            {

                key:"soldQty",

                label:"Sold Qty"

            },

            {

                key:"sellThrough",

                label:"Sell Through %"

            },

            {

                key:"stockPer",

                label:"Stock %"

            },

            {

                key:"salePer",

                label:"Sale %"

            },

            {

                key:"gap",

                label:"Gap"

            }

        ],

        rows

    });

}