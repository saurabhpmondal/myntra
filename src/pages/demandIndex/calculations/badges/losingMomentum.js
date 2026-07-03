/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Losing Momentum Badge
 * Version : V2.0
 * =====================================================
 */

export function losingMomentum(

    row

){

    if(

        row.rankMovement==="DOWN"

        &&

        Math.abs(

            row.rankChange

        )>=20

    ){

        return [

            "📉 Losing Momentum"

        ];

    }

    return [];

}