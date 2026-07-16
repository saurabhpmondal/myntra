/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Comparison Filter Engine
 * Version : V13.3
 * =====================================================
 */

import { DataStore } from "../../../services/dataService.js";

import {

    FilterState,

    getSalesByPeriod

} from "../../../services/filterService.js";

import {

    getPeriodLabel

} from "../../../services/periodService.js";

import { buildLookup } from "./buildLookup.js";

/**
 * =====================================================
 * Build Comparison Dataset
 * =====================================================
 */

export function filterComparisonData(){

    const currentPeriod =

        Number(

            FilterState.period

        );

    /**
     * ==========================================
     * Previous Period
     * ==========================================
     */

    const currentYear =

        Math.floor(

            currentPeriod/100

        );

    const currentMonth =

        currentPeriod%100;

    let previousYear =

        currentYear;

    let previousMonth =

        currentMonth-1;

    if(previousMonth===0){

        previousMonth=12;

        previousYear--;

    }

    const previousPeriod=

        previousYear*100+

        previousMonth;

    /**
     * ==========================================
     * Sales
     * Global filters already applied
     * ==========================================
     */

    const currentSales=

        getSalesByPeriod(

            currentPeriod

        );

    const previousSales=

        getSalesByPeriod(

            previousPeriod

        );

    /**
     * ==========================================
     * Lookup
     * ==========================================
     */

    const currentLookup=

        buildLookup(

            currentSales

        );

    const previousLookup=

        buildLookup(

            previousSales

        );

    /**
     * ==========================================
     * Returns
     * Automatically inherit
     * Brand
     * Category
     * ERP Status
     * Search
     * because lookup only contains
     * filtered sales.
     * ==========================================
     */

    const currentReturns=

        DataStore.returns.filter(

            row=>

                currentLookup[

                    row.order_line_id

                ]

        );

    const previousReturns=

        DataStore.returns.filter(

            row=>

                previousLookup[

                    row.order_line_id

                ]

        );

    return{

        current:{

            sales:

                currentSales,

            returns:

                currentReturns,

            lookup:

                currentLookup

        },

        previous:{

            sales:

                previousSales,

            returns:

                previousReturns,

            lookup:

                previousLookup

        },

        currentPeriod,

        previousPeriod,

        compareLabel:

            "vs "+

            getPeriodLabel(

                previousMonth,

                previousYear

            )

    };

}