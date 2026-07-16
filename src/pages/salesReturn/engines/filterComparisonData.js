/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Comparison Filter Engine
 * Version : V13.2
 * =====================================================
 */

import { FilterState } from "../../../services/filterService.js";

import { DataStore } from "../../../services/dataService.js";

import {

    getPeriodKey,
    getPeriodLabel

} from "../../../services/periodService.js";

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
     * Current Sales
     * ==========================================
     */

    const currentSales=

        DataStore.sales.filter(row=>{

            return(

                getPeriodKey(

                    row.month,

                    row.year

                )===currentPeriod

            );

        });

    /**
     * ==========================================
     * Previous Sales
     * ==========================================
     */

    const previousSales=

        DataStore.sales.filter(row=>{

            return(

                getPeriodKey(

                    row.month,

                    row.year

                )===previousPeriod

            );

        });

    /**
     * ==========================================
     * Current Returns
     * ==========================================
     */

    const currentReturns=

        DataStore.returns.filter(row=>{

            return(

                getPeriodKey(

                    row.month,

                    row.year

                )===currentPeriod

            );

        });

    /**
     * ==========================================
     * Previous Returns
     * ==========================================
     */

    const previousReturns=

        DataStore.returns.filter(row=>{

            return(

                getPeriodKey(

                    row.month,

                    row.year

                )===previousPeriod

            );

        });

    return{

        current:{

            sales:currentSales,

            returns:currentReturns

        },

        previous:{

            sales:previousSales,

            returns:previousReturns

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