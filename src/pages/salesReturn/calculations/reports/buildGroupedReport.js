/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Grouped Report Builder
 * Version : V3.0
 * =====================================================
 */

import {

    groupBy

}

from "../../utils/groupBy.js";

import {

    buildReport

}

from "../../engines/reportEngine.js";

/**
 * =====================================================
 * Build Grouped Report
 * =====================================================
 */

export function buildGroupedReport(

    currentRows=[],

    previousRows=[],

    config={}

){

    const{

        field,

        transform

    }=config;

    const currentGroups=

        groupBy(

            currentRows,

            field

        );

    const previousGroups=

        groupBy(

            previousRows,

            field

        );

    const keys=[

        ...new Set([

            ...Object.keys(

                currentGroups

            ),

            ...Object.keys(

                previousGroups

            )

        ])

    ];

    return keys.map(

        key=>{

            const current=

                currentGroups[key]||

                [];

            const previous=

                previousGroups[key]||

                [];

            const source=

                current[0]||

                previous[0]||

                {};

            return{

                ...(

                    transform

                    ?

                    transform(

                        source

                    )

                    :

                    {}

                ),

                ...buildReport(

                    current,

                    previous

                )

            };

        }

    );

}