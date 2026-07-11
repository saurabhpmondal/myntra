/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Launch Performance Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    formatNumber,
    formatCurrency

}

from "../../../utils/formatter.js";

export async function renderLaunchPerformance(

    target,

    rows=[]

){

    target.innerHTML=`

<div class="table-card">

    <div class="table-header">

        <h3>

            Launch Performance

        </h3>

        <span>

            ${formatNumber(

                rows.length

            )} Styles

        </span>

    </div>

    <div class="table-responsive">

        <table class="phoenix-table">

            <thead>

                <tr>

                    <th>#</th>

                    <th>Style ID</th>

                    <th>Brand</th>

                    <th>Launch Date</th>

                    <th>Launch Age</th>

                    <th>Units Sold</th>

                    <th>Revenue</th>

                    <th>Orders</th>

                    <th>ASP</th>

                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

                ${rows.length

                ?

                rows.map(

                    (

                        row,

                        index

                    )=>

                    buildRow(

                        row,

                        index

                    )

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

    row,

    index

){

    return `

<tr>

    <td>

        ${index+1}

    </td>

    <td>

        <b>

            ${row.styleId}

        </b>

    </td>

    <td>

        ${row.brand}

    </td>

    <td>

        ${formatDate(

            row.launchDate

        )}

    </td>

    <td>

        ${row.launchAge} Days

    </td>

    <td>

        ${formatNumber(

            row.units

        )}

    </td>

    <td>

        ${formatCurrency(

            row.revenue

        )}

    </td>

    <td>

        ${formatNumber(

            row.orders

        )}

    </td>

    <td>

        ${formatCurrency(

            row.asp

        )}

    </td>

    <td>

        ${buildStatus(

            row.status

        )}

    </td>

</tr>

`;

}

/**
 * =====================================================
 * Status Badge
 * =====================================================
 */

function buildStatus(

    status

){

    let cls=

        "badge-neutral";

    if(

        status.includes(

            "Hot"

        )

    ){

        cls=

            "badge-success";

    }

    else if(

        status.includes(

            "Good"

        )

    ){

        cls=

            "badge-primary";

    }

    else if(

        status.includes(

            "Slow"

        )

    ){

        cls=

            "badge-warning";

    }

    else if(

        status.includes(

            "Dead"

        )

    ){

        cls=

            "badge-danger";

    }

    return `

<span class="${cls}">

    ${status}

</span>

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

colspan="10"

style="

padding:50px;

text-align:center;

color:#64748b;

"

>

No Launch Data Available

</td>

</tr>

`;

}

/**
 * =====================================================
 * Date
 * =====================================================
 */

function formatDate(

    date

){

    if(

        !date

    ){

        return "-";

    }

    return date.toLocaleDateString(

        "en-IN",

        {

            day:"2-digit",

            month:"short",

            year:"numeric"

        }

    );

}