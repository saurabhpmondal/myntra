/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Launch Age Analysis Renderer
 * Version : V2.0
 * =====================================================
 */

import {

    renderTable

}

from "../../../components/common/table/table.js";

export async function renderLaunchAgeAnalysis(

    target,

    rows=[]

){

    await renderTable({

        target,

        title:

            "Launch Age Analysis",

        subtitle:

            `${rows.length} Buckets`,

        columns:[

            {

                key:"bucket",

                label:"Launch Age"

            },

            {

                key:"launches",

                label:"Launches",

                format:"number"

            },

            {

                key:"soldStyles",

                label:"Sold Styles",

                format:"number"

            },

            {

                key:"deadLaunches",

                label:"Dead Launches",

                format:"number"

            },

            {

                key:"unitsSold",

                label:"Units Sold",

                format:"number"

            },

            {

                key:"revenue",

                label:"Revenue",

                format:"currency"

            },

            {

                key:"successRate",

                label:"Success %",

                renderer:value=>

                    `${Number(

                        value||0

                    ).toFixed(1)}%`

            }

        ],

        rows

    });

}