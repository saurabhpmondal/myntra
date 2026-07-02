/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Calculate Badges
 * Version : V1.0
 * =====================================================
 */

import { BADGE_RULES } from "../config/badgeRules.js";

export function calculateBadges(

    row

){

    const badges=[];

    if(

        row.overallRank===

        BADGE_RULES.MARKET_LEADER

    ){

        badges.push(

            "👑 Market Leader"

        );

    }

    if(

        row.brandRank===

        BADGE_RULES.BRAND_LEADER

    ){

        badges.push(

            "🥇 Brand Leader"

        );

    }

    if(

        row.overallRank<=

        BADGE_RULES.TOP_10

    ){

        badges.push(

            "🔥 Top 10"

        );

    }

    if(

        row.overallRank<=

        BADGE_RULES.TOP_50

    ){

        badges.push(

            "⭐ Top 50"

        );

    }

    if(

        row.overallDW>=

        BADGE_RULES.ELITE_DW

    ){

        badges.push(

            "💎 Elite Style"

        );

    }

    if(

        row.cumulativeDW<=

        BADGE_RULES.CORE_STYLE

    ){

        badges.push(

            "🎯 Core Style"

        );

    }

    if(

        Number(row.rating||0)>=

        BADGE_RULES.CUSTOMER_RATING

    ){

        badges.push(

            "❤️ Customer Favourite"

        );

    }

    return badges;

}