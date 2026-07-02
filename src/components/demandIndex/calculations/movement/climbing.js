/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Climbing Rule
 * Version : V1.0
 * =====================================================
 */

import { MOVEMENT_RULES } from "../../config/movementRules.js";

export function climbing(movement){

    if(

        movement <=

        MOVEMENT_RULES.CLIMBING

    ){

        return{

            badge:"📈 Climbing",

            priority:2

        };

    }

    return null;

}