/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Return Percentage
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate Return %
 * =====================================================
 */

export function calculateReturnPercentage(

    row

){

    const sale=

        Number(

            row.sale.units.current||

            0

        );

    if(

        !sale

    ){

        return 0;

    }

    const returned=

        Number(

            row.rto.units.current||

            0

        )

        +

        Number(

            row.cxReturn.units.current||

            0

        );

    return Number(

        (

            returned

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}