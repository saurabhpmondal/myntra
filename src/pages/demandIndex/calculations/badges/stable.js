/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Stable Badge
 * Version : V2.0
 * =====================================================
 */

export function stable(

    row

){

    if(

        row.rankMovement==="SAME"

    ){

        return [

            "❄ Stable"

        ];

    }

    if(

        row.rankMovement==="UP"

        &&

        row.rankChange<3

    ){

        return [

            "❄ Stable"

        ];

    }

    if(

        row.rankMovement==="DOWN"

        &&

        Math.abs(

            row.rankChange

        )<3

    ){

        return [

            "❄ Stable"

        ];

    }

    return [];

}