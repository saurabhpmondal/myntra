/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Current Period
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../../store/salesReturnStore.js";

/**
 * =====================================================
 * Get Current Period Rows
 * =====================================================
 */

export function getCurrentPeriodRows(

    rows=[]

){

    const months=

        SalesReturnStore.filters.months;

    if(

        !months||

        !months.length

    ){

        return rows;

    }

    const selected=

        new Set(

            months.map(

                month=>

                    String(

                        month

                    ).trim()

            )

        );

    return rows.filter(

        row=>

            selected.has(

                String(

                    row.month

                ).trim()

            )

    );

}