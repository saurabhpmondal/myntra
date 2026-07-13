/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Business Engine
 * Version : V1.0
 * =====================================================
 */

import {

    calculateRisk

}

from "./riskEngine.js";

/**
 * =====================================================
 * Build Business Metrics
 * =====================================================
 */

export function buildBusinessMetrics(

    row

){

    return{

        ...row,

        returnPercentage:

            getReturnPercentage(

                row

            ),

        cxReturnPercentage:

            getCXReturnPercentage(

                row

            ),

        rtoPercentage:

            getRTOPercentage(

                row

            ),

        returnValue:

            getReturnValue(

                row

            ),

        risk:

            calculateRisk(

                row

            )

    };

}

/**
 * =====================================================
 * Return %
 * =====================================================
 */

function getReturnPercentage(

    row

){

    const sale=

        row.sale.units.current;

    if(

        !sale

    ){

        return 0;

    }

    return Number(

        (

            (

                row.rto.units.current+

                row.cxReturn.units.current

            )

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}

/**
 * =====================================================
 * CX Return %
 * =====================================================
 */

function getCXReturnPercentage(

    row

){

    const sale=

        row.sale.units.current;

    if(

        !sale

    ){

        return 0;

    }

    return Number(

        (

            row.cxReturn.units.current

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}

/**
 * =====================================================
 * RTO %
 * =====================================================
 */

function getRTOPercentage(

    row

){

    const sale=

        row.sale.units.current;

    if(

        !sale

    ){

        return 0;

    }

    return Number(

        (

            row.rto.units.current

            /

            sale

        )

        *

        100

    ).toFixed(

        2

    );

}

/**
 * =====================================================
 * Return Value
 * =====================================================
 */

function getReturnValue(

    row

){

    return(

        row.rto.gmv.current+

        row.cxReturn.gmv.current

    );

}