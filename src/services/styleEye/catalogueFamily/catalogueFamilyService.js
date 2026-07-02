/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Family Service
 * Version : V3.0
 * =====================================================
 */

import {

    findCatalogueFamily,
    findBrandProducts

} from "./catalogueFinder.js";

import {

    shouldUseFallback,
    buildFallbackProducts

} from "./fallbackBuilder.js";

import {

    buildTiles,
    limitTiles

} from "./tileBuilder.js";

import {

    buildSummary,
    buildHeader

} from "./summaryBuilder.js";

import {

    sortTiles

} from "./sorter.js";

/**
 * =====================================================
 * Build Catalogue Family
 * =====================================================
 */

export function buildCatalogueFamily(

    context

){

    if(!context){

        return null;

    }

    const currentStyle =

        String(

            context.identity.styleId || ""

        ).trim();

    // ==========================================
    // Find Catalogue
    // ==========================================

    const catalogue =

        findCatalogueFamily(

            currentStyle

        );

    if(

        !catalogue.currentProduct

    ){

        return null;

    }

    let mode =

        "FAMILY";

    let products =

        catalogue.family;

    // ==========================================
    // Fallback
    // ==========================================

    if(

        shouldUseFallback(

            products

        )

    ){

        mode =

            "TOP_SELLERS";

        products =

            buildFallbackProducts(

                findBrandProducts(

                    catalogue.currentProduct.brand,

                    currentStyle

                ),

                currentStyle

            );

    }

    // ==========================================
    // Build Tiles
    // ==========================================

    let tiles =

        buildTiles(

            products,

            currentStyle

        );

    // ==========================================
    // Sort
    // ==========================================

    tiles =

        sortTiles(

            tiles

        );

    // ==========================================
    // Maximum Cards
    // ==========================================

    tiles =

        limitTiles(

            tiles,

            10

        );

    // ==========================================
    // Summary
    // ==========================================

    const summary =

        buildSummary(

            catalogue.catalogueId,

            mode==="FAMILY"

            ? catalogue.family

            : products

        );

    // ==========================================
    // Header
    // ==========================================

    const header =

        buildHeader(

            mode,

            catalogue.catalogueId,

            catalogue.currentProduct.brand

        );

    // ==========================================
    // Return
    // ==========================================

    return{

        header,

        summary,

        data:{

            tiles

        }

    };

}

/**
 * =====================================================
 * Find Tile
 * =====================================================
 */

export function findCatalogueTile(

    catalogue,

    styleId

){

    if(

        !catalogue ||

        !catalogue.data ||

        !catalogue.data.tiles

    ){

        return null;

    }

    return catalogue.data.tiles.find(tile=>

        String(

            tile.styleId

        ).trim()

        ===

        String(

            styleId

        ).trim()

    ) || null;

}