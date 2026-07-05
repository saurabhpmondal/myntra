/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT KPI Builder
 * Version : V1.0
 * =====================================================
 */

export function buildKPIs(

    warehouseRows,

    salesRows

){

    /**
     * ==========================================
     * Total Stock
     * ==========================================
     */

    const totalStock=

        warehouseRows.reduce(

            (sum,row)=>

                sum+

                Number(

                    row.stock||0

                ),

            0

        );

    /**
     * ==========================================
     * Total Sale
     * ==========================================
     */

    const totalSale=

        warehouseRows.reduce(

            (sum,row)=>

                sum+

                Number(

                    row.soldQty||0

                ),

            0

        );

    /**
     * ==========================================
     * Sell Through
     * ==========================================
     */

    const sellThrough=

        totalStock

        ?

        (

            totalSale/

            totalStock

        )*100

        :

        0;

    /**
     * ==========================================
     * Top FC
     * ==========================================
     */

    const topFC=

        warehouseRows.length

        ?

        warehouseRows

        .slice()

        .sort(

            (a,b)=>

                b.soldQty-

                a.soldQty

        )[0]

        :

        null;

    /**
     * ==========================================
     * Top State
     * ==========================================
     */

    const stateMap={};

    salesRows.forEach(

        row=>{

            const state=

                String(

                    row.state||

                    ""

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

                    row.qty||0

                );

        }

    );

    const topState=

        Object.entries(

            stateMap

        )

        .sort(

            (a,b)=>

                b[1]-a[1]

        )[0]||

        null;

    return{

        totalStock,

        totalSale,

        sellThrough,

        topFC,

        topState

    };

}