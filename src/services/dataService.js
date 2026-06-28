/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Data Service
 * Version : V3.1
 * =====================================================
 */

import { updateSplash } from "../splash/splash.js";
import { Sheets } from "./sheetConfig.js";
import { loadCSV } from "./csvService.js";
import { buildLookups } from "./lookupService.js";

export const DataStore = {

    sales: [],
    returns: [],
    sjitStock: [],
    sorStock: [],
    sellerStock: [],
    productMaster: [],
    traffic: [],

    listings: [],
    inventory: [],

    loaded: false

};

export async function initializeData(){

    if(DataStore.loaded){

        return DataStore;

    }

    console.log("🚀 Loading Phoenix Data Engine...");

    updateSplash(5,"Connecting to Google Sheets...");

    updateSplash(12,"Loading Sales...");
    const sales = await loadCSV(Sheets.sales);

    updateSplash(22,"Loading Returns...");
    const returns = await loadCSV(Sheets.returns);

    updateSplash(32,"Loading SJIT Stock...");
    const sjitStock = await loadCSV(Sheets.sjitStock);

    updateSplash(42,"Loading SOR Stock...");
    const sorStock = await loadCSV(Sheets.sorStock);

    updateSplash(52,"Loading Seller Stock...");
    const sellerStock = await loadCSV(Sheets.sellerStock);

    updateSplash(62,"Loading Product Master...");
    const productMaster = await loadCSV(Sheets.productMaster);

    updateSplash(72,"Loading Traffic...");
    const traffic = await loadCSV(Sheets.traffic);

    updateSplash(84,"Loading Listings...");
    const listings = await loadCSV(Sheets.listings);

    updateSplash(94,"Loading Inventory...");
    const inventory = await loadCSV(Sheets.inventory);

    DataStore.sales = sales;
    DataStore.returns = returns;
    DataStore.sjitStock = sjitStock;
    DataStore.sorStock = sorStock;
    DataStore.sellerStock = sellerStock;
    DataStore.productMaster = productMaster;
    DataStore.traffic = traffic;

    DataStore.listings = listings;
    DataStore.inventory = inventory;

    buildLookups();

    DataStore.loaded = true;

    console.table({

        Sales: sales.length,

        Returns: returns.length,

        SJIT: sjitStock.length,

        SOR: sorStock.length,

        SellerStock: sellerStock.length,

        ProductMaster: productMaster.length,

        Traffic: traffic.length,

        Listings: listings.length,

        Inventory: inventory.length

    });

    updateSplash(100,"Launching Phoenix...");

    return DataStore;

}