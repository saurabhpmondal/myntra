/**
 * =====================================================
 * Customer Favourite
 * =====================================================
 */

export function customerFavourite(

    row

){

    if(

        Number(

            row.rating || 0

        )>=4

    ){

        return [

            "❤️ Customer Favourite"

        ];

    }

    return [];

}