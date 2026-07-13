/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Actual Return Engine
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Actual Return Dataset
 * =====================================================
 */

export function buildActualReturnDataset(

    rows=[],

    periods=[]

){

    if(

        !periods.length

    ){

        return rows.filter(

            row=>

                row.hasReturn

        );

    }

    return rows.filter(

        row=>

            row.hasReturn

            &&

            periods.some(

                period=>

                    period.month===

                    row.returnMonth

                    &&

                    Number(

                        period.year

                    )===

                    Number(

                        row.returnYear

                    )

            )

    );

}