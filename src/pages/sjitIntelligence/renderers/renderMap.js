/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Heat Map
 * Version : V1.1
 * =====================================================
 */

export async function renderMap(

    target,

    mapData=[]

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

        style="

            width:100%;

            height:520px;

        "

    ></div>

</div>

`;

    try{

        const container=

            document.getElementById(

                "sjitIndiaMap"

            );

        if(

            !container

        ){

            return;

        }

        const oldChart=

            echarts.getInstanceByDom(

                container

            );

        if(

            oldChart

        ){

            oldChart.dispose();

        }

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

                container

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

                        row=>row.value

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

                    emphasis:{

                        label:{

                            show:true

                        }

                    },

                    data:mapData

                }

            ]

        });

        window.addEventListener(

            "resize",

            ()=>chart.resize()

        );

    }

    catch(error){

        console.error(

            "India Map",

            error

        );

    }

}