/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Previous Period
 * Version : V1.0
 * =====================================================
 */

import {

    getMonthIndex

}

from "../../utils/monthIndex.js";

import {

    SalesReturnStore

}

from "../../store/salesReturnStore.js";

/**
 * =====================================================
 * Get Previous Period Rows
 * =====================================================
 */

export function getPreviousPeriodRows(

    rows=[]

){

    const months=

        SalesReturnStore.filters.months;

    if(

        !months||

        !months.length

    ){

        return [];

    }

    const previousMonths=

        months

        .map(

            getPreviousMonth

        )

        .filter(

            month=>

                month!==null

        );

    const lookup=

        new Set(

            previousMonths

        );

    return rows.filter(

        row=>

            lookup.has(

                buildKey(

                    row.month,

                    row.year

                )

            )

    );

}

/**
 * =====================================================
 * Previous Month
 * =====================================================
 */

function getPreviousMonth(

    value

){

    const parts=

        String(

            value

        ).split(

            "-"

        );

    if(

        parts.length!==2

    ){

        return null;

    }

    const month=

        getMonthIndex(

            parts[0]

        );

    let year=

        Number(

            parts[1]

        );

    if(

        month===null||

        !year

    ){

        return null;

    }

    let previousMonth=

        month-1;

    if(

        previousMonth<0

    ){

        previousMonth=11;

        year--;

    }

    return buildKey(

        MONTH_NAMES[

            previousMonth

        ],

        year

    );

}

/**
 * =====================================================
 * Build Key
 * =====================================================
 */

function buildKey(

    month,

    year

){

    return `${month}-${year}`;

}

const MONTH_NAMES=[

    "Jan",

    "Feb",

    "Mar",

    "Apr",

    "May",

    "Jun",

    "Jul",

    "Aug",

    "Sep",

    "Oct",

    "Nov",

    "Dec"

];