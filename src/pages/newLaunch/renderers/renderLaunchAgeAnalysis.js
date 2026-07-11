/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Launch Age Analysis Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    formatNumber,

    formatCompactCurrency

}

from "../../../utils/formatter.js";

export async function renderLaunchAgeAnalysis(

    target,

    rows=[]

){

    target.innerHTML=`

<div class="table-card">

    <div class="table-header">

        <h3>

            Launch Age Analysis

        </h3>

        <span>

            ${formatNumber(

                rows.length

            )} Buckets

        </span>

    </div>

    <div class="table-responsive">

        <table class="phoenix-table">

            <thead>

                <tr>

                    <th>Launch Age</th>

                    <th>Launches</th>

                    <th>Sold Styles</th>

                    <th>Dead Launches</th>

                    <th>Units Sold</th>

                    <th>Revenue</th>

                    <th>Success %</th>

                </tr>

            </thead>

            <tbody>

                ${

                    rows.length

                    ?

                    rows.map(

                        buildRow

                    ).join("")

                    :

                    buildEmpty()

                }

            </tbody>

        </table>

    </div>

</div>

`;

}

/**
 * =====================================================
 * Row
 * =====================================================
 */

function buildRow(

    row

){

    return `

<tr>

    <td>

        <b>

            ${row.bucket} Days

        </b>

    </td>

    <td>

        ${formatNumber(

            row.launches

        )}

    </td>

    <td>

        ${formatNumber(

            row.soldStyles

        )}

    </td>

    <td>

        ${formatNumber(

            row.deadLaunches

        )}

    </td>

    <td>

        ${formatNumber(

            row.unitsSold

        )}

    </td>

    <td>

        ${formatCompactCurrency(

            row.revenue

        )}

    </td>

    <td>

        ${Number(

            row.successRate||0

        ).toFixed(1)}%

    </td>

</tr>

`;

}

/**
 * =====================================================
 * Empty
 * =====================================================
 */

function buildEmpty(){

    return `

<tr>

<td

colspan="7"

style="

padding:50px;

text-align:center;

color:#64748b;

"

>

No Launch Age Analysis Available

</td>

</tr>

`;

}