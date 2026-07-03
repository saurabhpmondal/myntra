/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Rising Star Badge
 * Version : V2.0
 * =====================================================
 */

export function risingStar(

    row

){

    if(

        row.rankMovement==="NEW"

        &&

        row.overallRank<=100

    ){

        return [

            "🚀 Rising Star"

        ];

    }

    return [];

}