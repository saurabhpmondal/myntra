/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Movement Engine
 * Version : V2.0
 * =====================================================
 */

import { fastClimber } from "./movement/fastClimber.js";

import { climbing } from "./movement/climbing.js";

import { stable } from "./movement/stable.js";

import { falling } from "./movement/falling.js";

import { losingMomentum } from "./movement/losingMomentum.js";

export function calculateMovement(

    previousRank,

    currentRank

){

    const movement =

        Number(currentRank||0)

        -

        Number(previousRank||0);

    return(

        fastClimber(movement)

        ||

        climbing(movement)

        ||

        stable(movement)

        ||

        falling(movement)

        ||

        losingMomentum(movement)

        ||

        {

            badge:"",

            priority:999

        }

    );

}