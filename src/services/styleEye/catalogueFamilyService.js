/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Family Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

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

        context.identity.styleId;

    const catalogueId =

        getCatalogueId(currentStyle);

    // ==========================================
    // Find Family Members
    // ==========================================

    let family = DataStore.productMaster

        .filter(product=>

            getCatalogueId(

                product.style_id

            )===catalogueId

        )

        .map(product=>{

            const styleId =

                product.style_id;

            // --------------------------
            // Sales
            // --------------------------

            const sale90D =

                DataStore.sales

                .filter(row=>

                    String(

                        row.style_id

                    ).trim()===styleId

                )

                .reduce(

                    (sum,row)=>

                        sum+

                        Number(

                            row.qty||0

                        ),

                    0

                );

            // --------------------------
            // Rating
            // --------------------------

            const traffic =

                DataStore.traffic.find(row=>

                    String(

                        row.style_id

                    ).trim()===styleId

                ) || {};

            const rating =

                Number(

                    traffic.rating||0

                );

            return{

                styleId,

                erpSku:

                    product.erp_sku,

                brand:

                    product.brand,

                status:

                    product.status,

                rating,

                sale90D,

                isCurrent:

                    styleId===currentStyle

            };

        });

    // ==========================================
    // Fallback
    // ==========================================

    if(family.length<=1){

        family =

            buildTopSellerFamily(

                currentStyle

            );

    }

    // ==========================================
    // Sort
    // ==========================================

    family.sort(

        (a,b)=>{

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

        }

    );

    // ==========================================
    // Summary
    // ==========================================

    const active =

        family.filter(item=>

            String(

                item.status

            ).toUpperCase()==="CONTINUE"

        ).length;

    const inactive =

        family.length-active;

    const totalSale =

        family.reduce(

            (sum,item)=>

                sum+

                item.sale90D,

            0

        );

    const avgRating =

        family.length

        ?

        family.reduce(

            (sum,item)=>

                sum+

                item.rating,

            0

        )/family.length

        :

        0;

    return{

        catalogue:{

            id:catalogueId,

            styleCount:

                family.length,

            active,

            inactive,

            totalSale,

            avgRating,

            currentStyle,

            fallback:

                family.length<=1

        },

        family

    };

}

/**
 * =====================================================
 * Top Sellers
 * Used when catalogue has only one style
 * =====================================================
 */

function buildTopSellerFamily(currentStyle){

    return DataStore.productMaster

        .map(product=>{

            const sale90D =

                DataStore.sales

                .filter(row=>

                    String(

                        row.style_id

                    ).trim()===

                    product.style_id

                )

                .reduce(

                    (sum,row)=>

                        sum+

                        Number(

                            row.qty||0

                        ),

                    0

                );

            const traffic =

                DataStore.traffic.find(row=>

                    String(

                        row.style_id

                    ).trim()===

                    product.style_id

                ) || {};

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

                    Number(

                        traffic.rating||0

                    ),

                sale90D,

                isCurrent:

                    product.style_id===

                    currentStyle

            };

        })

        .sort(

            (a,b)=>

                b.sale90D-a.sale90D

        )

        .slice(0,8);

}