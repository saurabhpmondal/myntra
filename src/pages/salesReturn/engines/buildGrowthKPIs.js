/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth KPI Engine
 * Version : V13.2
 * =====================================================
 */

import {

    calculateGrowth,
    getGrowthDirection

} from "./buildGrowth.js";

export function buildGrowthKPIs(

    current,

    previous,

    compareLabel="Previous Period"

){

    return{

        sale:

            buildItem(

                current.sale,

                previous.sale,

                true,

                compareLabel

            ),

        cancel:

            buildItem(

                current.cancel,

                previous.cancel,

                false,

                compareLabel

            ),

        rto:

            buildItem(

                current.rto,

                previous.rto,

                false,

                compareLabel

            ),

        cx:

            buildItem(

                current.cx,

                previous.cx,

                false,

                compareLabel

            ),

        net:

            buildItem(

                current.net,

                previous.net,

                true,

                compareLabel

            )

    };

}

/**
 * =====================================================
 * Build KPI
 * =====================================================
 */

function buildItem(

    current,

    previous,

    positiveMetric,

    compareLabel

){

    const gmvGrowth=

        calculateGrowth(

            current.gmv,

            previous.gmv

        );

    const unitGrowth=

        calculateGrowth(

            current.units,

            previous.units

        );

    return{

        gmv:

            current.gmv,

        units:

            current.units,

        gmvGrowth,

        unitGrowth,

        compareLabel,

        /**
         * Used by renderer
         */

        gmvDirection:

            getGrowthDirection(

                gmvGrowth

            ),

        unitDirection:

            getGrowthDirection(

                unitGrowth

            ),

        /**
         * Business Rule
         *
         * true
         *  Sale / Net
         *
         * false
         *  Cancel / RTO / CX
         */

        positiveMetric

    };

}