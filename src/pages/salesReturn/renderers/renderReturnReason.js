/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Return Reason Analysis
 * Version : V1.0
 * =====================================================
 */

import {

    REPORT_CONFIG

}

from "../config/reportConfig.js";

export async function renderReturnReason(

    target

){

    const config=

        REPORT_CONFIG.RETURN_REASON;

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
    id="returnReasonTable">

    </div>

</div>

`;

}