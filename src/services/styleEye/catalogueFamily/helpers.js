/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Family Helpers
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Extract Catalogue ID from ERP SKU
 *
 * Examples
 *
 * 1281S2013 -> 1281S
 * 1415S147  -> 1415S
 * 1620S141  -> 1620S
 * =====================================================
 */

export function getCatalogueId(

    erpSku

){

    erpSku = String(

        erpSku || ""

    )

    .trim()

    .toUpperCase();

    const match =

        erpSku.match(

            /^(.*?[A-Z])\d+$/

        );

    return match

        ? match[1]

        : erpSku;

}

/**
 * =====================================================
 * Compare Style IDs
 * =====================================================
 */

export function compareStyleId(

    a,

    b

){

    return String(a)

        .localeCompare(

            String(b),

            undefined,

            {

                numeric:true,

                sensitivity:"base"

            }

        );

}

/**
 * =====================================================
 * Safe Number
 * =====================================================
 */

export function toNumber(

    value

){

    const number =

        Number(value);

    return Number.isFinite(number)

        ? number

        : 0;

}

/**
 * =====================================================
 * Safe String
 * =====================================================
 */

export function toText(

    value

){

    return String(

        value || ""

    ).trim();

}

/**
 * =====================================================
 * Normalize Text
 * =====================================================
 */

export function normalize(

    value

){

    return toText(

        value

    )

    .toUpperCase();

}

/**
 * =====================================================
 * Sort By Sale
 * =====================================================
 */

export function sortBySale(

    a,

    b

){

    return (

        b.sale90D || 0

    ) - (

        a.sale90D || 0

    );

}