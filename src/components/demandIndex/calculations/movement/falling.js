/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Falling Rule
 * Version : V1.0
 * =====================================================
 */

import { MOVEMENT_RULES } from "../../config/movementRules.js";

export function falling(movement){

    if(

        movement >=

        MOVEMENT_RULES.FALLING

    ){

        return{

            badge:"⬇ Falling",

            priority:4

        };

    }

    return null;

}