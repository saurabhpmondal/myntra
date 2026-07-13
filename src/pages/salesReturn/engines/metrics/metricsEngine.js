/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Metrics Engine
 * Version : V1.0
 * =====================================================
 */

import {

    buildSaleMetrics

}

from "./saleMetrics.js";

import {

    buildCancelMetrics

}

from "./cancelMetrics.js";

import {

    buildRTOMetrics

}

from "./rtoMetrics.js";

import {

    buildCXReturnMetrics

}

from "./cxReturnMetrics.js";

import {

    buildNetMetrics

}

from "./netMetrics.js";

/**
 * =====================================================
 * Build Metrics
 * =====================================================
 */

export function buildMetrics(

    rows=[]

){

    return{

        sale:

            buildSaleMetrics(

                rows

            ),

        cancel:

            buildCancelMetrics(

                rows

            ),

        rto:

            buildRTOMetrics(

                rows

            ),

        cxReturn:

            buildCXReturnMetrics(

                rows

            ),

        net:

            buildNetMetrics(

                rows

            )

    };

}