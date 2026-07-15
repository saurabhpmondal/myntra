/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Return Reason Report Renderer
 * Version : V12.0
 * =====================================================
 */

import { renderTable } from "../../../components/common/table/table.js";

export async function renderReturnReasonReport(

    target,

    rows

){

    await renderTable({

        target,

        title:"Return Reason Analysis",

        subtitle:"RTO & Customer Return Analysis",

        columns:[

            {
                key:"returnReason",
                label:"Return Reason",
                align:"left"
            },

            {
                key:"rtoGMV",
                label:"RTO GMV",
                format:"currency"
            },

            {
                key:"rtoUnits",
                label:"RTO Units",
                format:"number"
            },

            {
                key:"cxGMV",
                label:"CX Return GMV",
                format:"currency"
            },

            {
                key:"cxUnits",
                label:"CX Return Units",
                format:"number"
            },

            {
                key:"totalGMV",
                label:"Total Return GMV",
                format:"currency"
            },

            {
                key:"totalUnits",
                label:"Total Return Units",
                format:"number"
            }

        ],

        rows: rows.map(row=>({

            ...row,

            totalGMV:

                row.rtoGMV +

                row.cxGMV,

            totalUnits:

                row.rtoUnits +

                row.cxUnits

        }))

    });

}