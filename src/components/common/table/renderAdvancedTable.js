/**
 * =====================================================
 * Project Phoenix
 * Common Component
 * Module  : Advanced Table
 * Version : V2.0
 * =====================================================
 */

export async function renderAdvancedTable(

    target,

    config={}

){

    const{

        title="",

        subtitle="",

        fixedColumns=[],

        metrics=[],

        rows=[]

    }=config;

    const columns=

        buildColumns(

            fixedColumns,

            metrics

        );

    target.innerHTML=`

<div class="dashboard-card">

    <div class="dashboard-header">

        <div>

            <h3>${title}</h3>

            <p>${subtitle}</p>

        </div>

    </div>

    <div class="table-wrapper">

        <table class="phoenix-table advanced-table">

            <thead>

                ${buildHeader(

                    fixedColumns,

                    metrics

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

    fixedColumns,

    metrics

){

    const top=[];

    const bottom=[];

    fixedColumns.forEach(

        column=>{

            top.push(

                `<th rowspan="2">${column.label}</th>`

            );

        }

    );

    metrics.forEach(

        metric=>{

            top.push(

                `<th colspan="3">${metric.label}</th>`

            );

            bottom.push(

                "<th>GMV</th>",

                "<th>Units</th>",

                "<th>Growth</th>"

            );

        }

    );

    return`

<tr>

${top.join("")}

</tr>

<tr>

${bottom.join("")}

</tr>

`;

}

/**
 * =====================================================
 * Columns
 * =====================================================
 */

function buildColumns(

    fixedColumns,

    metrics

){

    const columns=[];

    fixedColumns.forEach(

        column=>

            columns.push(

                column

            )

    );

    metrics.forEach(

        metric=>{

            columns.push({

                key:

                    `${metric.key}.gmv.current`

            });

            columns.push({

                key:

                    `${metric.key}.units.current`

            });

            columns.push({

                key:

                    `${metric.key}.units.growth.value`

            });

        }

    );

    return columns;

}

/**
 * =====================================================
 * Rows
 * =====================================================
 */

function buildRows(

    columns,

    rows

){

    return rows.map(

        row=>`

<tr>

${columns.map(

column=>`

<td>

${read(

row,

column.key

)}

</td>

`

).join("")}

</tr>

`

    ).join("");

}

/**
 * =====================================================
 * Read Nested Value
 * =====================================================
 */

function read(

    row,

    path

){

    return path

        .split(".")

        .reduce(

            (

                value,

                key

            )=>

                value?.[key],

            row

        )??"-";

}