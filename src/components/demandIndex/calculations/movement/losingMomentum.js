/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Losing Momentum Rule
 * Version : V1.0
 * =====================================================
 */

import { MOVEMENT_RULES } from "../../config/movementRules.js";

export function losingMomentum(movement){

    if(

        movement >=

        MOVEMENT_RULES.LOSING

    ){

        return{

            badge:"📉 Losing Momentum",

            priority:5

        };

    }

    return null;

}