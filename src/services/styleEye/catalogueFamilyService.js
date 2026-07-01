/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Family Service
 * Version : V2.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

import { buildStyleMetrics } from "./styleMetricsService.js";

import {

    getCatalogueId,
    compareStyleId

} from "../../utils/styleUtils.js";

/**
 * =====================================================
 * Build Catalogue Family
 * =====================================================
 */

export function buildCatalogueFamily(context){

    if(!context){

        return null;

    }

    const currentStyle =

        String(
            context.identity.styleId || ""
        ).trim();

    const catalogueId =

        getCatalogueId(currentStyle);

    const familyProducts =

        DataStore.productMaster.filter(product=>

            getCatalogueId(

                product.style_id

            )===catalogueId

        );

    const mode =

        familyProducts.length>1

        ?

        "FAMILY"

        :

        "TOP_SELLERS";

    const sourceProducts =

        mode==="FAMILY"

        ?

        familyProducts

        :

        getTopSellerProducts();

    const tiles =

        sourceProducts.map(product=>{

            const metrics =

                buildStyleMetrics(

                    product.style_id

                );

            return{

                styleId:

                    product.style_id,

                erpSku:

                    product.erp_sku,

                brand:

                    product.brand,

                status:

                    product.status,

                rating:

                    metrics.rating,

                sale90D:

                    metrics.sale90D,

                imageUrl:

                    product.image_url || "",

                isCurrent:

                    product.style_id===

                    currentStyle

            };

        });

    if(mode==="FAMILY"){

        tiles.sort((a,b)=>{

            if(a.isCurrent){

                return -1;

            }

            if(b.isCurrent){

                return 1;

            }

            return compareStyleId(

                a.styleId,

                b.styleId

            );

        });

    }

    else{

        tiles.sort((a,b)=>{

            if(a.isCurrent){

                return -1;

            }

            if(b.isCurrent){

                return 1;

            }

            return b.sale90D-a.sale90D;

        });

    }

    const summary =

        buildSummary(

            catalogueId,

            familyProducts

        );

    return{

        header:{

            mode,

            title:

                mode==="FAMILY"

                ?

                "📦 Catalogue Family"

                :

                "⭐ Best Selling Styles",

            subtitle:

                mode==="FAMILY"

                ?

                `Catalogue ${catalogueId}`

                :

                "No catalogue family found"

        },

        summary,

        data:{

            tiles

        }

    };

}

/**
 * =====================================================
 * Build Summary
 * =====================================================
 */

function buildSummary(

    catalogueId,

    familyProducts

){

    let active = 0;

    let inactive = 0;

    let totalSale = 0;

    let totalRating = 0;

    familyProducts.forEach(product=>{

        const metrics =

            buildStyleMetrics(

                product.style_id

            );

        totalSale +=

            metrics.sale90D;

        totalRating +=

            metrics.rating;

        if(

            String(

                product.status || ""

            ).toUpperCase()==="CONTINUE"

        ){

            active++;

        }

        else{

            inactive++;

        }

    });

    return{

        catalogueId,

        styleCount:

            familyProducts.length,

        active,

        inactive,

        totalSale,

        avgRating:

            familyProducts.length

            ?

            totalRating /

            familyProducts.length

            :

            0

    };

}

/**
 * =====================================================
 * Get Top Seller Products
 * =====================================================
 */

function getTopSellerProducts(){

    return DataStore.productMaster

        .map(product=>{

            const metrics =

                buildStyleMetrics(

                    product.style_id

                );

            return{

                ...product,

                sale90D:

                    metrics.sale90D

            };

        })

        .sort((a,b)=>

            b.sale90D -

            a.sale90D

        )

        .slice(0,8);

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

        tile.styleId===styleId

    ) || null;

}

