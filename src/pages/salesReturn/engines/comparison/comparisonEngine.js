/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Comparison Engine
 * Version : V1.0
 * =====================================================
 */

import {

    calculateGrowth

}

from "./growthCalculator.js";

/**
 * =====================================================
 * Compare Metrics
 * =====================================================
 */

export function compareMetrics(

    current={},

    previous={}

){

    return{

        units:{

            current:

                Number(

                    current.units||0

                ),

            previous:

                Number(

                    previous.units||0

                ),

            growth:

                calculateGrowth(

                    current.units,

                    previous.units

                )

        },

        gmv:{

            current:

                Number(

                    current.gmv||0

                ),

            previous:

                Number(

                    previous.gmv||0

                ),

            growth:

                calculateGrowth(

                    current.gmv,

                    previous.gmv

                )

        }

    };

}