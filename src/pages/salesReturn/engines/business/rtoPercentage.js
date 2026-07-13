/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : RTO Percentage
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate RTO %
 * =====================================================
 */

export function calculateRTOPercentage(

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

                row.rto.units.current||

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