/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Stable Rule
 * Version : V1.0
 * =====================================================
 */

import { MOVEMENT_RULES } from "../../config/movementRules.js";

export function stable(movement){

    if(

        movement >=

        MOVEMENT_RULES.STABLE_MIN

        &&

        movement <=

        MOVEMENT_RULES.STABLE_MAX

    ){

        return{

            badge:"❄ Stable",

            priority:3

        };

    }

    return null;

}