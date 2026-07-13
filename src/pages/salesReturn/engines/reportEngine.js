/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Report Engine
 * Version : V1.0
 * =====================================================
 */

import {

    buildMetrics

}

from "./metrics/metricsEngine.js";

import {

    compareMetrics

}

from "./comparison/comparisonEngine.js";

/**
 * =====================================================
 * Build Report
 * =====================================================
 */

export function buildReport(

    currentRows=[],

    previousRows=[]

){

    const current=

        buildMetrics(

            currentRows

        );

    const previous=

        buildMetrics(

            previousRows

        );

    return{

        sale:

            compareMetrics(

                current.sale,

                previous.sale

            ),

        cancel:

            compareMetrics(

                current.cancel,

                previous.cancel

            ),

        rto:

            compareMetrics(

                current.rto,

                previous.rto

            ),

        cxReturn:

            compareMetrics(

                current.cxReturn,

                previous.cxReturn

            ),

        net:

            compareMetrics(

                current.net,

                previous.net

            )

    };

}