/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Month Index
 * Version : V1.0
 * =====================================================
 */

const MONTHS={

    JAN:0,

    FEB:1,

    MAR:2,

    APR:3,

    MAY:4,

    JUN:5,

    JUL:6,

    AUG:7,

    SEP:8,

    OCT:9,

    NOV:10,

    DEC:11

};

/**
 * =====================================================
 * Get Month Index
 * =====================================================
 */

export function getMonthIndex(

    month

){

    if(

        month===undefined||

        month===null

    ){

        return null;

    }

    return MONTHS[

        String(

            month

        )

        .trim()

        .toUpperCase()

        .substring(

            0,

            3

        )

    ]??null;

}