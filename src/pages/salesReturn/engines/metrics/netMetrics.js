/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Net Metrics
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

/**
 * =====================================================
 * Build Net Metrics
 * =====================================================
 */

export function buildNetMetrics(

    rows=[]

){

    const sale=

        buildSaleMetrics(

            rows

        );

    const cancel=

        buildCancelMetrics(

            rows

        );

    const rto=

        buildRTOMetrics(

            rows

        );

    const cx=

        buildCXReturnMetrics(

            rows

        );

    return{

        units:

            sale.units

            -

            cancel.units

            -

            rto.units

            -

            cx.units,

        gmv:

            sale.gmv

            -

            cancel.gmv

            -

            rto.gmv

            -

            cx.gmv

    };

}