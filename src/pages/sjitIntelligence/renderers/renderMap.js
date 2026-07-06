/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Heat Map
 * Version : V2.0
 * =====================================================
 */

import {

    registerIndiaMap

}

from "../services/mapService.js";

let chart=null;

export async function renderMap(

    target,

    data=[]

){

    if(

        !target

    ){

        return;

    }

    await registerIndiaMap();

    if(

        chart

    ){

        chart.dispose();

    }

    chart=

        echarts.init(

            target

        );

    chart.setOption({

        backgroundColor:"#ffffff",

        tooltip:{

            trigger:"item",

            formatter(params){

                const value=

                    params.value||0;

                return `

<b>${params.name}</b>

<br>

Units Sold :

${value}

`;

            }

        },

        visualMap:{

            min:0,

            max:getMaxValue(

                data

            ),

            left:"left",

            bottom:20,

            calculable:true,

            text:[

                "High",

                "Low"

            ],

            inRange:{

                color:[

                    "#FFF5F7",

                    "#FFD6DF",

                    "#FF9CB2",

                    "#FF5A80",

                    "#E91E63"

                ]

            }

        },

        series:[

            {

                name:"SJIT Sale",

                type:"map",

                map:"india",

                roam:true,

                zoom:1.1,

                emphasis:{

                    label:{

                        show:true

                    }

                },

                data

            }

        ]

    });

    window.addEventListener(

        "resize",

        ()=>{

            chart.resize();

        }

    );

}

/**
 * =====================================================
 * Maximum Value
 * =====================================================
 */

function getMaxValue(

    rows

){

    if(

        !rows.length

    ){

        return 1;

    }

    return Math.max(

        ...rows.map(

            row=>

                Number(

                    row.value||0

                )

        )

    );

}