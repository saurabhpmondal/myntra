/**
 * =====================================================
 * Project Phoenix
 * Product : Common Component
 * Module  : Export Button
 * Version : V1.0
 * =====================================================
 */

import { exportExcel } from "../../../utils/exportExcel.js";

export function renderExportButton({

    target,

    filename,

    columns,

    rows

}){

    if(!target){

        return;

    }

    const button=document.createElement("button");

    button.type="button";

    button.className="phoenix-export-btn";

    button.innerHTML=`

        <span>📥</span>

        <span>Export Excel</span>

    `;

    button.onclick=()=>{

        exportExcel({

            filename,

            columns,

            rows

        });

    };

    target.appendChild(button);

}