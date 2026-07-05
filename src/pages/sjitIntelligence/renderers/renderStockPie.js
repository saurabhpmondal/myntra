/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : FC Stock Distribution
 * Version : V1.1
 * =====================================================
 */

export async function renderStockPie(

    target,

    rows

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="card-header">

        <div>

            <h3>

                FC Stock Distribution

            </h3>

            <p>

                Current SJIT Stock by Fulfilment Centre

            </p>

        </div>

    </div>

    <div

        id="sjitStockPie"

        style="

            width:100%;

            height:420px;

        "

    ></div>

</div>

`;

    const chart=

        echarts.init(

            document.getElementById(

                "sjitStockPie"

            )

        );

    chart.setOption({

        tooltip:{

            trigger:"item",

            formatter(params){

                return `

<strong>

${params.name}

</strong>

<br><br>

Stock :

${Number(

    params.value

).toLocaleString()}

<br>

Contribution :

${params.percent}%

`;

            }

        },

        legend:{

            bottom:0

        },

        series:[

            {

                type:"pie",

                radius:[

                    "45%",

                    "75%"

                ],

                data:

                    rows.map(

                        row=>({

                            name:

                                row.fc,

                            value:

                                row.stock

                        })

                    )

            }

        ]

    });

    window.addEventListener(

        "resize",

        ()=>chart.resize()

    );

}