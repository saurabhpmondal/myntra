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
 * Group Rows
 * =====================================================
 */

export function groupBy(

    rows=[],

    key

){

    const groups={};

    rows.forEach(

        row=>{

            const value=

                row?.[key]??

                "Unknown";

            if(

                !groups[value]

            ){

                groups[value]=[];

            }

            groups[value].push(

                row

            );

        }

    );

    return groups;

}

/**
 * =====================================================
 * Group Values
 * =====================================================
 */

export function groupValues(

    rows=[],

    key

){

    return Object.values(

        groupBy(

            rows,

            key

        )

    );

}

/**
 * =====================================================
 * Group Entries
 * =====================================================
 */

export function groupEntries(

    rows=[],

    key

){

    return Object.entries(

        groupBy(

            rows,

            key

        )

    );

}