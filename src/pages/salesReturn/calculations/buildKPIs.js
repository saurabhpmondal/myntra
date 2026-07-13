/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build KPIs
 * Version : V1.0
 * =====================================================
 */

import {

    buildMetrics

}

from "../engines/metrics/metricsEngine.js";

import {

    compareMetrics

}

from "../engines/comparison/comparisonEngine.js";

/**
 * =====================================================
 * Build KPIs
 * =====================================================
 */

export function buildKPIs(

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