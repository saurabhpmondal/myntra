/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderAdvancedTable

}

from "../../../components/common/table/renderAdvancedTable.js";

/**
 * =====================================================
 * Render Style Report
 * =====================================================
 */

export async function renderStyle(

    target,

    rows=[]

){

    await renderAdvancedTable(

        target,

        {

            title:

                "Style Performance",

            subtitle:

                "Sales vs Returns by Style",

            fixedColumns:[

                {

                    key:"styleId",

                    label:"Style ID",

                    clickable:true,

                    type:"style"

                },

                {

                    key:"brand",

                    label:"Brand"

                },

                {

                    key:"poType",

                    label:"PO Type"

                },

                {

                    key:"articleType",

                    label:"Article"

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