/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Risk Engine
 * Version : V1.0
 * =====================================================
 */

import {

    BUSINESS_RULES

}

from "../../config/businessRules.js";

/**
 * =====================================================
 * Calculate Risk
 * =====================================================
 */

export function calculateRisk(

    row

){

    const percentage=

        Number(

            row.attributedReturnPercentage||

            0

        );

    const limits=

        BUSINESS_RULES.RISK;

    if(

        percentage<=limits.NO

    ){

        return{

            level:"No Risk",

            color:"success"

        };

    }

    if(

        percentage<=limits.LOW

    ){

        return{

            level:"Low Risk",

            color:"primary"

        };

    }

    if(

        percentage<=limits.MID

    ){

        return{

            level:"Mid Risk",

            color:"warning"

        };

    }

    return{

        level:"High Risk",

        color:"danger"

    };

}