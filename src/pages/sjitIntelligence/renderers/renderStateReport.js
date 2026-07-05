/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : State Report Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderTable

}

from "../../../components/common/table/table.js";

export async function renderStateReport(

    target,

    rows

){

    await renderTable({

        target,

        title:"State Performance",

        columns:[

            {

                key:"state",

                label:"State"

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