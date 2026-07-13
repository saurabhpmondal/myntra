/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Compare Periods
 * Version : V1.0
 * =====================================================
 */

import {

    getCurrentPeriodRows

}

from "./currentPeriod.js";

import {

    getPreviousPeriod

}

from "./previousPeriod.js";

/**
 * =====================================================
 * Compare Periods
 * =====================================================
 */

export function comparePeriods(

    rows=[],

    periods=[]

){

    const current=

        getCurrentPeriodRows(

            rows

        );

    const previousPeriods=

        getPreviousPeriod(

            periods

        );

    const previous=

        rows.filter(

            row=>

                previousPeriods.some(

                    period=>

                        period.month===row.month

                        &&

                        Number(

                            period.year

                        )===

                        Number(

                            row.year

                        )

                )

        );

    return{

        current,

        previous

    };

}