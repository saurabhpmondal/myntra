/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Badge Engine
 * Version : V3.0
 * =====================================================
 */

import { marketLeader } from "./badges/marketLeader.js";

import { brandLeader } from "./badges/brandLeader.js";

import { top10 } from "./badges/top10.js";

import { top50 } from "./badges/top50.js";

import { coreStyle } from "./badges/coreStyle.js";

/* ==========================================
   Movement
========================================== */

import { risingStar } from "./badges/risingStar.js";

import { climbing } from "./badges/climbing.js";

import { losingMomentum } from "./badges/losingMomentum.js";

import { stable } from "./badges/stable.js";

/* ==========================================
   Business
========================================== */

import { customerFavourite } from "./badges/customerFavourite.js";

import { highConverter } from "./badges/highConverter.js";

import { nationwideHero } from "./badges/nationwideHero.js";

/**
 * =====================================================
 * Calculate Badges
 * =====================================================
 */

export function calculateBadges(

    row

){

    return [

        /* Achievement */

        ...marketLeader(row),

        ...brandLeader(row),

        ...top10(row),

        ...top50(row),

        ...coreStyle(row),

        /* Momentum */

        ...risingStar(row),

        ...climbing(row),

        ...losingMomentum(row),

        ...stable(row),

        /* Business */

        ...customerFavourite(row),

        ...highConverter(row),

        ...nationwideHero(row)

    ];

}