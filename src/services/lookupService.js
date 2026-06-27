/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Lookup Service
 * =====================================================
 */

import { DataStore } from "./dataService.js";

export const LookupStore = {

    productMap: {},

    brands: [],

    categories: [],

    erpStatuses: []

};

export function buildLookups() {

    const map = {};

    const brands = new Set();

    const categories = new Set();

    const statuses = new Set();

    DataStore.productMaster.forEach(product => {

        map[product.style_id] = {

            styleId: product.style_id,

            erpSku: product.erp_sku,

            brand: product.brand,

            category: product.article_type,

            erpStatus: product.status

        };

        if (product.brand) {

            brands.add(product.brand);

        }

        if (product.article_type) {

            categories.add(product.article_type);

        }

        if (product.status) {

            statuses.add(product.status);

        }

    });

    LookupStore.productMap = map;

    LookupStore.brands = [...brands].sort();

    LookupStore.categories = [...categories].sort();

    LookupStore.erpStatuses = [...statuses].sort();

    console.table({

        Brands: LookupStore.brands.length,

        Categories: LookupStore.categories.length,

        ERPStatus: LookupStore.erpStatuses.length,

        Products: Object.keys(map).length

    });

}