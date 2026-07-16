/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Engine
 * Version : V13.2
 * =====================================================
 */

/**
 * =====================================================
 * Calculate Growth %
 * =====================================================
 */

export function calculateGrowth(

    current,

    previous

){

    current = Number(current) || 0;

    previous = Number(previous) || 0;

    /**
     * ------------------------------------------
     * Both Zero
     * ------------------------------------------
     */

    if(

        current===0 &&

        previous===0

    ){

        return 0;

    }

    /**
     * ------------------------------------------
     * Previous Zero
     * ------------------------------------------
     */

    if(previous===0){

        return 100;

    }

    return (

        (

            current-

            previous

        )

        /

        previous

    )*100;

}

/**
 * =====================================================
 * Trend Direction
 * =====================================================
 */

export function getGrowthDirection(

    growth

){

    if(growth>0){

        return "up";

    }

    if(growth<0){

        return "down";

    }

    return "flat";

}