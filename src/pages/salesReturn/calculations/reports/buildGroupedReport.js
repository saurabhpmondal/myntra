/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Grouped Report Builder
 * Version : V2.0
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

        label

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

    const keys=

        new Set([

            ...Object.keys(

                currentGroups

            ),

            ...Object.keys(

                previousGroups

            )

        ]);

    return Array.from(

        keys

    ).map(

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

                key,

                info:

                    label(

                        source

                    ),

                report:

                    buildReport(

                        current,

                        previous

                    )

            };

        }

    );

}