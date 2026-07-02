/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Fast Climber Rule
 * Version : V1.0
 * =====================================================
 */

import { MOVEMENT_RULES } from "../../config/movementRules.js";

export function fastClimber(movement){

    if(

        movement <=

        MOVEMENT_RULES.FAST_CLIMBER

    ){

        return{

            badge:"🚀 Fast Climber",

            priority:1

        };

    }

    return null;

}