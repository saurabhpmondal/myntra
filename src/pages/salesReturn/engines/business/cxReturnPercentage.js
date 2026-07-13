/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : CX Return Percentage
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate CX Return %
 * =====================================================
 */

export function calculateCXReturnPercentage(

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

    return Number(

        (

            Number(

                row.cxReturn.units.current||

                0

            )

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}