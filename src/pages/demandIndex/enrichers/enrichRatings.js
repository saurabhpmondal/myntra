/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Rating Enricher
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../../../services/dataService.js";

export function enrichRatings(

    rows

){

    const ratingMap={};

    (DataStore.ratings || []).forEach(

        row=>{

            const styleId=

                String(

                    row.style_id || ""

                ).trim();

            const rating=

                Number(

                    row.rating || 0

                );

            if(

                styleId

            ){

                ratingMap[styleId]=

                    rating;

            }

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