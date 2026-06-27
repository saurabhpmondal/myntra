/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Data Service
 * Version : V3.0
 * =====================================================
 */

import { Sheets } from "./sheetConfig.js";
import { loadCSV } from "./csvService.js";

export const DataStore = {

    sales: [],
    returns: [],
    sjitStock: [],
    sorStock: [],
    sellerStock: [],
    productMaster: [],
    traffic: [],

    loaded: false

};

export async function initializeData() {

    if (DataStore.loaded) {
        return DataStore;
    }

    console.log("🚀 Loading Phoenix Data Engine...");

    const [

        sales,
        returns,
        sjitStock,
        sorStock,
        sellerStock,
        productMaster,
        traffic

    ] = await Promise.all([

        loadCSV(Sheets.sales),
        loadCSV(Sheets.returns),
        loadCSV(Sheets.sjitStock),
        loadCSV(Sheets.sorStock),
        loadCSV(Sheets.sellerStock),
        loadCSV(Sheets.productMaster),
        loadCSV(Sheets.traffic)

    ]);

    DataStore.sales = sales;
    DataStore.returns = returns;
    DataStore.sjitStock = sjitStock;
    DataStore.sorStock = sorStock;
    DataStore.sellerStock = sellerStock;
    DataStore.productMaster = productMaster;
    DataStore.traffic = traffic;

    DataStore.loaded = true;

    console.table({

        Sales: sales.length,
        Returns: returns.length,
        SJIT: sjitStock.length,
        SOR: sorStock.length,
        SellerStock: sellerStock.length,
        Products: productMaster.length,
        Traffic: traffic.length

    });

    return DataStore;

}