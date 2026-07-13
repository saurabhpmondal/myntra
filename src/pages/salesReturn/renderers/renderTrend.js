/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Trend Analysis
 * Version : V1.0
 * =====================================================
 */

import {

    REPORT_CONFIG

}

from "../config/reportConfig.js";

export async function renderTrend(

    target

){

    const config=

        REPORT_CONFIG.TREND;

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
    id="trendTable">

    </div>

</div>

`;

}