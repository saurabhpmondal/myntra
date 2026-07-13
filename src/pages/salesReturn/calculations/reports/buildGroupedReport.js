/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Grouped Report Builder
 * Version : V1.0
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

    field

){

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

        key=>({

            key,

            report:

                buildReport(

                    currentGroups[key]||[],

                    previousGroups[key]||[]

                )

        })

    );

}