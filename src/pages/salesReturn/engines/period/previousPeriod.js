/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Previous Period
 * Version : V2.0
 * =====================================================
 */

import {

    getMonthIndex

}

from "../../utils/monthIndex.js";

/**
 * =====================================================
 * Get Previous Period
 * =====================================================
 */

export function getPreviousPeriod(

    months=[],

    years=[]

){

    const result=[];

    months.forEach(

        (

            month,

            index

        )=>{

            const previous=

                getPreviousMonth(

                    month,

                    years[index]

                );

            if(

                previous

            ){

                result.push(

                    previous

                );

            }

        }

    );

    return result;

}

/**
 * =====================================================
 * Previous Month
 * =====================================================
 */

function getPreviousMonth(

    month,

    year

){

    let index=

        getMonthIndex(

            month

        );

    let previousYear=

        Number(

            year

        );

    if(

        index===null||

        !previousYear

    ){

        return null;

    }

    index--;

    if(

        index<0

    ){

        index=11;

        previousYear--;

    }

    return{

        month:

            MONTHS[index],

        year:

            previousYear

    };

}

const MONTHS=[

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