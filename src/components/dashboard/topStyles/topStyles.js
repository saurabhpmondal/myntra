/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Top Styles
 * Version : V1.0
 * =====================================================
 */

import { renderTable } from "../../common/table/table.js";

import { getTopStyles } from "../../../services/topStyleService.js";

export async function renderTopStyles(target){

    const data = getTopStyles();

    await renderTable({

        target,

        title:"Top 20 Styles",

        subtitle:"Current Month Performance",

        columns:[

            {

                key:"rank",

                label:"Rank",

                align:"center"

            },

            {

                key:"styleId",

                label:"Style ID"

            },

            {

                key:"brand",

                label:"Brand"

            },

            {

                key:"units",

                label:"Sold Units",

                align:"right",

                format:"number"

            },

            {

                key:"gmv",

                label:"GMV",

                align:"right",

                format:"compactCurrency"

            },

            {

                key:"asp",

                label:"ASP",

                align:"right",

                format:"currency"

            }

        ],

        rows:data,

        pageSize:20

    });

}