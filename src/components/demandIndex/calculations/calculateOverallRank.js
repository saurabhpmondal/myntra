/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Calculate Overall Rank
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate Overall Rank
 *
 * Input:
 * [
 *   {
 *      styleId,
 *      overallDW
 *   }
 * ]
 *
 * Output:
 * [
 *   {
 *      styleId,
 *      overallDW,
 *      overallRank
 *   }
 * ]
 * =====================================================
 */

export function calculateOverallRank(

    rows

){

    if(

        !Array.isArray(rows)

    ){

        return [];

    }

    const sorted =

        [...rows]

        .sort(

            (

                a,

                b

            )=>

                Number(

                    b.overallDW || 0

                ) -

                Number(

                    a.overallDW || 0

                )

        );

    let previousDW =

        null;

    let currentRank =

        0;

    sorted.forEach(

        (

            row,

            index

        )=>{

            const dw =

                Number(

                    row.overallDW || 0

                );

            if(

                dw !== previousDW

            ){

                currentRank =

                    index + 1;

                previousDW =

                    dw;

            }

            row.overallRank =

                currentRank;

        }

    );

    return sorted;

}