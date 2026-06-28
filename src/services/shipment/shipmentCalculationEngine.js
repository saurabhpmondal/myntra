/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Calculation Engine
 * Version : V1.0
 * =====================================================
 */

export function calculateShipment(

    row,

    options

){

    const gross=

        Number(

            row.gross||0

        );

    const returns=

        Number(

            row.returns||0

        );

    const stock=

        Number(

            row.stock||0

        );

    const saleDays=

        Number(

            options.saleDays||30

        );

    const targetCover=

        Number(

            options.targetCover||45

        );

    const recallTrigger=

        Number(

            options.recallTrigger||60

        );

    const net=Math.max(

        gross-returns,

        0

    );

    const returnPercentage=

        gross===0

        ?

        0

        :

        (

            returns/

            gross

        )

        *

        100;

    const drr=

        saleDays===0

        ?

        0

        :

        net/

        saleDays;

    const sc=

        drr===0

        ?

        0

        :

        stock/

        drr;

    const projection=

        Math.max(

            Math.ceil(

                (

                    drr*

                    targetCover

                )

                -

                stock

            ),

            0

        );

    let shipment=

        projection;

    let recall=0;

    if(

        drr>0

        &&

        sc>

        recallTrigger

    ){

        recall=

            Math.max(

                Math.ceil(

                    stock-

                    (

                        drr*

                        recallTrigger

                    )

                ),

                0

            );

    }

    return{

        gross,

        returns,

        returnPercentage,

        net,

        drr,

        stock,

        sc,

        projection,

        shipment,

        recall

    };

}