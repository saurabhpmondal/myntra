/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : PO Type Performance
 * Version : V1.0
 * =====================================================
 */

import {

    REPORT_CONFIG

}

from "../config/reportConfig.js";

export async function renderPOType(

    target

){

    const config=

        REPORT_CONFIG.PO_TYPE;

    target.innerHTML=`

<div class="dashboard-card">

    <div class="dashboard-header">

        <div>

            <h3>

                ${config.TITLE}

            </h3>

            <p>

                ${config.SUBTITLE}

            </p>

        </div>

    </div>

    <div
    id="poTypeTable">

    </div>

</div>

`;

}