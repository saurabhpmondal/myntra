/**

=====================================================

Project Phoenix

Product : Myntra Analytics

Module  : Rating Enricher

Version : V2.0

=====================================================
*/


import { DataStore }
from "../../../services/dataService.js";

export function enrichRatings(

rows

){

const ratingMap={};  

(  

    DataStore.traffic || []  

).forEach(  

    row=>{  

        const styleId=  

            String(  

                row.style_id || ""  

            ).trim();  

        if(  

            !styleId  

        ){  

            return;  

        }  

        ratingMap[  

            styleId  

        ]=  

            Number(  

                row.rating || 0  

            );  

    }  

);  

rows.forEach(  

    row=>{  

        row.rating=  

            ratingMap[  

                row.styleId  

            ] || 0;  

    }  

);  

return rows;

}

https://github.com/saurabhpmondal/myntra/blob/main/src%2Fpages%2FdemandIndex%2Fcalculations%2Fbadges%2FcustomerFavourite.js

/**

=====================================================

Customer Favourite

=====================================================
*/


export function customerFavourite(

row

){

if(  

    Number(  

        row.rating || 0  

    )>=3.8  

    &&  

    Number(  

        row.unitsSold || 0  

    )>=20  

){  

    return [  

        "❤️ Customer Favourite"  

    ];  

}  

return [];

}