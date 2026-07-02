/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Finder
 * Version : V1.0
 * =====================================================
 */


import { DataStore } from "../../dataService.js";
import {

    getCatalogueId,
    normalize

} from "./helpers.js";

/**
 * =====================================================
 * Find Catalogue Family
 * =====================================================
 */

export function findCatalogueFamily(

    styleId

){

    styleId = normalize(

        styleId

    );

    const currentProduct =

        DataStore.productMaster.find(product=>

            normalize(

                product.style_id

            )===styleId

        );

    if(!currentProduct){

        return{

            found:false,

            catalogueId:"",

            currentProduct:null,

            family:[]

        };

    }

    const catalogueId =

        getCatalogueId(

            currentProduct.erp_sku

        );

    const family =

        DataStore.productMaster

            .filter(product=>

                getCatalogueId(

                    product.erp_sku

                )===catalogueId

            )

            .sort((a,b)=>

                String(a.erp_sku)

                .localeCompare(

                    String(b.erp_sku),

                    undefined,

                    {

                        numeric:true,

                        sensitivity:"base"

                    }

                )

            );

    return{

        found:

            family.length>1,

        catalogueId,

        currentProduct,

        family

    };

}

/**
 * =====================================================
 * Find Brand Products
 * Used when catalogue family not available
 * =====================================================
 */

export function findBrandProducts(

    brand,

    currentStyle

){

    brand = normalize(

        brand

    );

    currentStyle = normalize(

        currentStyle

    );

    return DataStore.productMaster.filter(product=>

        normalize(

            product.brand

        )===brand

        &&

        normalize(

            product.style_id

        )!==currentStyle

    );

}

/**
 * =====================================================
 * Get Current Product
 * =====================================================
 */

export function getCurrentProduct(

    styleId

){

    styleId = normalize(

        styleId

    );

    return DataStore.productMaster.find(product=>

        normalize(

            product.style_id

        )===styleId

    ) || null;

}