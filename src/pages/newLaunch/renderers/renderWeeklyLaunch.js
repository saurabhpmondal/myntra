/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Weekly Launch Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    formatNumber,

    formatCompactCurrency

}

from "../../../utils/formatter.js";

export async function renderWeeklyLaunch(

    target,

    rows=[]

){

    target.innerHTML=`

<div class="table-card">

    <div class="table-header">

        <h3>

            Weekly Launch Performance

        </h3>

        <span>

            ${formatNumber(

                rows.length

            )} Weeks

        </span>

    </div>

    <div class="table-responsive">

        <table class="phoenix-table">

            <thead>

                <tr>

                    <th>Launch Week</th>

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

            Week ${row.launchWeek}

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

No Weekly Launch Performance Available

</td>

</tr>

`;

}