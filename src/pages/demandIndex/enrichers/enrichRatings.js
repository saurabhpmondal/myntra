/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Rating Enricher
 * Version : V2.1 (Debug)
 * =====================================================
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

        traffic=>{

            const styleId=

                String(

                    traffic.style_id || ""

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

                    traffic.rating || 0

                );

        }

    );

    let matched=0;

    rows.forEach(

        row=>{

            const key=

                String(

                    row.styleId || ""

                ).trim();

            row.rating=

                ratingMap[key] || 0;

            if(

                row.rating>0

            ){

                matched++;

            }

        }

    );

    console.log(

        "Traffic Records :",

        DataStore.traffic.length

    );

    console.log(

        "Rating Map :",

        Object.keys(

            ratingMap

        ).length

    );

    console.log(

        "Matched Ratings :",

        matched

    );

    console.log(

        "Sample Traffic :",

        DataStore.traffic[0]

    );

    console.log(

        "Sample Demand Row :",

        rows[0]

    );

    return rows;

}