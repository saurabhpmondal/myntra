/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Dataset Engine
 * Version : V1.0
 * =====================================================
 */

import {

    buildActualReturnDataset

}

from "../returns/actualReturnEngine.js";

import {

    buildAttributedReturnDataset

}

from "../returns/attributedReturnEngine.js";

/**
 * =====================================================
 * Build Dataset
 * =====================================================
 */

export function buildDataset(

    rows=[],

    periods=[]

){

    return{

        actualRows:

            buildActualReturnDataset(

                rows,

                periods

            ),

        attributedRows:

            buildAttributedReturnDataset(

                rows,

                periods

            )

    };

}