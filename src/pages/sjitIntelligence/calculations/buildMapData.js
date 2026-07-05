/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Map Data Builder
 * Version : V1.0
 * =====================================================
 */

export function buildMapData(

    salesRows

){

    const stateMap={};

    salesRows.forEach(

        row=>{

            const state=

                String(

                    row.state || ""

                ).trim();

            if(

                !state

            ){

                return;

            }

            if(

                !stateMap[

                    state

                ]

            ){

                stateMap[

                    state

                ]=0;

            }

            stateMap[

                state

            ]+=

                Number(

                    row.qty || 0

                );

        }

    );

    return Object.entries(

        stateMap

    )

    .map(

        ([state,soldQty])=>({

            name:state,

            value:soldQty

        })

    )

    .sort(

        (a,b)=>

            b.value-

            a.value

    );

}