/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Date
 * Version : V1.0
 * =====================================================
 */

import {

    getMonthIndex

}

from "./monthIndex.js";

/**
 * =====================================================
 * Build Date
 * =====================================================
 */

export function buildDate(

    date,

    month,

    year

){

    const day=

        Number(

            date

        );

    const monthIndex=

        getMonthIndex(

            month

        );

    const fullYear=

        Number(

            year

        );

    if(

        !day||

        monthIndex===null||

        !fullYear

    ){

        return null;

    }

    return new Date(

        fullYear,

        monthIndex,

        day

    );

}

/**
 * =====================================================
 * Is Valid Date
 * =====================================================
 */

export function isValidDate(

    value

){

    return(

        value instanceof Date

        &&

        !Number.isNaN(

            value.getTime()

        )

    );

}