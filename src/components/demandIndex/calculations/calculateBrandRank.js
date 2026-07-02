/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Calculate Brand Rank
 * Version : V1.0
 * =====================================================
 */

import { rankByMetric } from "./rankByMetric.js";

/**
 * =====================================================
 * Brand Rank
 * =====================================================
 */

export function calculateBrandRank(

    rows

){

    return rankByMetric(

        rows,

        "brandDW",

        "brandRank"

    );

}