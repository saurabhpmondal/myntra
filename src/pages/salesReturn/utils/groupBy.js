/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Group By Utility
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Group By
 * =====================================================
 */

export function groupBy(

    rows=[],

    key

){

    return rows.reduce(

        (

            groups,

            row

        )=>{

            const value=

                row?.[key]??

                "__BLANK__";

            if(

                !groups[value]

            ){

                groups[value]=[];

            }

            groups[value].push(

                row

            );

            return groups;

        },

        {}

    );

}

/**
 * =====================================================
 * Group Keys
 * =====================================================
 */

export function getGroupKeys(

    groups={}

){

    return Object.keys(

        groups

    );

}

/**
 * =====================================================
 * Group Values
 * =====================================================
 */

export function getGroupValues(

    groups={}

){

    return Object.values(

        groups

    );

}