/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Attributed Return Percentage
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate Attributed Return %
 * =====================================================
 */

export function calculateAttributedReturnPercentage(

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

    const attributed=

        Number(

            row.attributedRTOUnits||

            0

        )

        +

        Number(

            row.attributedCXReturnUnits||

            0

        );

    return Number(

        (

            attributed

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}