/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Heat Map
 * Version : V1.0
 * =====================================================
 */

export async function renderMap(

    target,

    mapData

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="card-header">

        <div>

            <h3>

                India Sales Heat Map

            </h3>

            <p>

                State-wise SJIT Sales Distribution

            </p>

        </div>

    </div>

    <div

        id="sjitIndiaMap"

        style="width:100%;height:520px;"

    ></div>

</div>

`;

    const geoJson=

        await fetch(

            "src/assets/maps/india.json"

        )

        .then(

            response=>response.json()

        );

    echarts.registerMap(

        "india",

        geoJson

    );

    const chart=

        echarts.init(

            document.getElementById(

                "sjitIndiaMap"

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

Sold Qty :

${Number(

params.value||0

).toLocaleString()}

`;

            }

        },

        visualMap:{

            min:0,

            max:Math.max(

                ...mapData.map(

                    x=>x.value

                ),

                1

            ),

            left:20,

            bottom:20,

            calculable:true

        },

        series:[

            {

                type:"map",

                map:"india",

                roam:true,

                data:mapData

            }

        ]

    });

    window.addEventListener(

        "resize",

        ()=>chart.resize()

    );

}