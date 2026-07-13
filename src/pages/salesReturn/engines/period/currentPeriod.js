/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Current Period Engine
 * Version : V2.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../../store/salesReturnStore.js";

/**
 * =====================================================
 * Current Period Rows
 * =====================================================
 */

export function getCurrentPeriodRows(

    rows=[]

){

    const periods=

        SalesReturnStore.filters.periods;

    if(

        !periods.length

    ){

        return rows;

    }

    return rows.filter(

        row=>

            periods.some(

                period=>

                    period.month===row.month

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