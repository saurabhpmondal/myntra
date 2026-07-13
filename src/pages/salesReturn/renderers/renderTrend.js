/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Trend Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderAdvancedTable

}

from "../../../components/common/table/renderAdvancedTable.js";

/**
 * =====================================================
 * Render Trend Report
 * =====================================================
 */

export async function renderTrend(

    target,

    rows=[]

){

    await renderAdvancedTable(

        target,

        {

            title:

                "Monthly Trend",

            subtitle:

                "Sales & Return Trend Analysis",

            fixedColumns:[

                {

                    key:"period",

                    label:"Month"

                }

            ],

            metrics:[

                {

                    key:"sale",

                    label:"Sale"

                },

                {

                    key:"cancel",

                    label:"Cancelled"

                },

                {

                    key:"rto",

                    label:"RTO"

                },

                {

                    key:"cxReturn",

                    label:"CX Return"

                },

                {

                    key:"net",

                    label:"Net"

                }

            ],

            rows

        }

    );

}