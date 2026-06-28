/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Helper
 * Version : V1.0
 * =====================================================
 */

/**
 * Safe Number
 */

export function toNumber(value){

    const number = Number(value);

    return Number.isFinite(number)

        ? number

        : 0;

}

/**
 * Round Up
 */

export function roundUp(value){

    return Math.max(

        0,

        Math.ceil(

            toNumber(value)

        )

    );

}

/**
 * Round 2 Decimals
 */

export function round2(value){

    return Number(

        toNumber(value)

            .toFixed(2)

    );

}

/**
 * Gross Sale
 */

export function grossSale(units){

    return toNumber(units);

}

/**
 * Return %
 */

export function returnPercent(

    gross,

    returns

){

    gross = toNumber(gross);

    returns = toNumber(returns);

    if(gross<=0){

        return 0;

    }

    return round2(

        (returns/gross)*100

    );

}

/**
 * Net Sale
 */

export function netSale(

    gross,

    returns

){

    return Math.max(

        0,

        toNumber(gross)-

        toNumber(returns)

    );

}

/**
 * Daily Run Rate
 */

export function drr(

    net,

    saleDays

){

    saleDays = Math.max(

        1,

        toNumber(saleDays)

    );

    return round2(

        toNumber(net)/saleDays

    );

}

/**
 * Stock Cover
 */

export function stockCover(

    stock,

    drrValue

){

    stock = toNumber(stock);

    drrValue = toNumber(drrValue);

    if(drrValue<=0){

        return 0;

    }

    return round2(

        stock/drrValue

    );

}

/**
 * Projection Qty
 */

export function projection(

    drrValue,

    targetCover,

    stock

){

    return roundUp(

        (toNumber(drrValue)*

        toNumber(targetCover))

        -

        toNumber(stock)

    );

}

/**
 * Recall Qty
 */

export function recall(

    stock,

    drrValue,

    recallTrigger

){

    return roundUp(

        toNumber(stock)

        -

        (

            toNumber(drrValue)

            *

            toNumber(recallTrigger)

        )

    );

}

/**
 * Shipment Qty
 */

export function shipment(

    projectionQty

){

    return roundUp(

        projectionQty

    );

}

/**
 * Rating Check
 */

export function validRating(

    rating

){

    return toNumber(rating)>=3.8;

}

/**
 * Return Check
 */

export function validReturn(

    returnPercentage

){

    return toNumber(

        returnPercentage

    )<=35;

}

/**
 * Continue Status
 */

export function isContinue(

    status

){

    return String(

        status||""

    )

    .trim()

    .toUpperCase()

    ===

    "CONTINUE";

}

/**
 * Brand Rule
 */

export function isSorBrand(

    brand

){

    brand = String(

        brand||""

    )

    .trim()

    .toUpperCase();

    return(

        brand==="KALINI"

        ||

        brand==="MITERA"

    );

}