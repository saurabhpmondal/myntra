/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Movement Engine
 * Version : V3.0
 * =====================================================
 */

import { fastClimber } from "./movement/fastClimber.js";

import { climbing } from "./movement/climbing.js";

import { stable } from "./movement/stable.js";

import { falling } from "./movement/falling.js";

import { losingMomentum } from "./movement/losingMomentum.js";

/**
 * =====================================================
 * Calculate Movement
 *
 * previousRank = Last Month Rank
 * currentRank  = Current Rank
 * =====================================================
 */

export function calculateMovement(

    previousRank,

    currentRank

){

    const movement =

        Number(currentRank || 0)

        -

        Number(previousRank || 0);

    const result =

        fastClimber(movement)

        ||

        climbing(movement)

        ||

        stable(movement)

        ||

        falling(movement)

        ||

        losingMomentum(movement);

    if(result){

        return{

            movement,

            ...result

        };

    }

    return{

        movement,

        badge:"",

        label:"",

        icon:"",

        color:"gray",

        priority:999

    };

}