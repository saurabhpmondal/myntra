/**
 * =====================================================
 * Project Phoenix
 * Common Component
 * Module  : Advanced Table
 * Version : V1.0
 * =====================================================
 */

export async function renderAdvancedTable(

    target,

    config={}

){

    const{

        title="",

        subtitle="",

        headerRows=[],

        columns=[],

        rows=[]

    }=config;

    target.innerHTML=`

<div class="dashboard-card">

    <div class="dashboard-header">

        <div>

            <h3>

                ${title}

            </h3>

            <p>

                ${subtitle}

            </p>

        </div>

    </div>

    <div class="table-wrapper">

        <table class="phoenix-table advanced-table">

            <thead>

                ${buildHeader(

                    headerRows,

                    columns

                )}

            </thead>

            <tbody>

                ${buildRows(

                    columns,

                    rows

                )}

            </tbody>

        </table>

    </div>

</div>

`;

}

/**
 * =====================================================
 * Header
 * =====================================================
 */

function buildHeader(

    headerRows=[],

    columns=[]

){

    if(

        !headerRows.length

    ){

        return`

<tr>

${columns.map(

column=>`

<th>

${column.label}

</th>

`

).join("")}

</tr>

`;

    }

    return headerRows.map(

        row=>`

<tr>

${row.map(

cell=>`

<th

colspan="${cell.colspan||1}"

rowspan="${cell.rowspan||1}"

>

${cell.label}

</th>

`

).join("")}

</tr>

`

    ).join("");

}

/**
 * =====================================================
 * Rows
 * =====================================================
 */

function buildRows(

    columns=[],

    rows=[]

){

    return rows.map(

        row=>`

<tr>

${columns.map(

column=>`

<td>

${

column.renderer

?

column.renderer(

row[

column.key

],

row

)

:

row[

column.key

]??

"-"

}

</td>

`

).join("")}

</tr>

`

    ).join("");

}