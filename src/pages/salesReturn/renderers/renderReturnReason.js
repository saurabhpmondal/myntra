/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Return Reason Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    renderAdvancedTable

}

from "../../../components/common/table/renderAdvancedTable.js";

/**
 * =====================================================
 * Render Return Reason Report
 * =====================================================
 */

export async function renderReturnReason(

    target,

    rows=[]

){

    await renderAdvancedTable(

        target,

        {

            title:

                "Customer Return Reasons",

            subtitle:

                "Customer Return Analysis (CX Return Only)",

            fixedColumns:[

                {

                    key:"returnReason",

                    label:"Return Reason"

                }

            ],

            metrics:[

                {

                    key:"cxReturn",

                    label:"CX Return"

                }

            ],

            rows

        }

    );

}