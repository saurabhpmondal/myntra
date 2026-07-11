/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dead Launch Renderer
 * Version : V1.0
 * =====================================================
 */

import {

    formatNumber,

    formatCurrency

}

from "../../../utils/formatter.js";

export async function renderDeadLaunch(

    target,

    rows=[]

){

    target.innerHTML=`

<div class="table-card">

    <div class="table-header">

        <h3>

            Dead Launch Report

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

                    <th>Orders</th>

                    <th>Revenue</th>

                    <th>Days Without Sale</th>

                </tr>

            </thead>

            <tbody>

                ${

                    rows.length

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

            row.orders

        )}

    </td>

    <td>

        ${formatCurrency(

            row.revenue

        )}

    </td>

    <td>

        <span class="badge-danger">

            ${row.daysWithoutSale} Days

        </span>

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

colspan="8"

style="

padding:50px;

text-align:center;

color:#64748b;

"

>

🎉 No Dead Launches Found

</td>

</tr>

`;

}

/**
 * =====================================================
 * Format Date
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