/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Customer Favourite Badge
 * Version : V2.0
 * =====================================================
 */

export function customerFavourite(

    row

){

    if(

        Number(

            row.rating || 0

        )>=4.0

    ){

        return [

            "❤️ Customer Favourite"

        ];

    }

    return [];

}