/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Performance
 * Version : V1.0
 * =====================================================
 */

import {

    REPORT_CONFIG

}

from "../config/reportConfig.js";

export async function renderStyle(

    target

){

    const config=

        REPORT_CONFIG.STYLE;

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
    id="styleTable">

    </div>

</div>

`;

}