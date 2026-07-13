/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Attributed Return Engine
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Attributed Return Dataset
 * =====================================================
 */

export function buildAttributedReturnDataset(

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

                    row.month

                    &&

                    Number(

                        period.year

                    )===

                    Number(

                        row.year

                    )

            )

    );

}