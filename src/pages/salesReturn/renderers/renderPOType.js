/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : PO Type Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderAdvancedTable

}

from "../../../components/common/table/renderAdvancedTable.js";

/**
 * =====================================================
 * Render PO Type Report
 * =====================================================
 */

export async function renderPOType(

    target,

    rows=[]

){

    await renderAdvancedTable(

        target,

        {

            title:

                "PO Type Analysis",

            subtitle:

                "Performance by Fulfilment Type",

            fixedColumns:[

                {

                    key:"poType",

                    label:"PO Type"

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