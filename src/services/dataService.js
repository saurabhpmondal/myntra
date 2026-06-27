/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Data Service
 * Version : V3.0
 * =====================================================
 */
import { updateSplash } from "../splash/splash.js";
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

    updateSplash(5, "Connecting to Google Sheets...");

    updateSplash(15, "Loading Sales...");
    const sales = await loadCSV(Sheets.sales);

    updateSplash(30, "Loading Returns...");
    const returns = await loadCSV(Sheets.returns);

    updateSplash(45, "Loading SJIT Stock...");
    const sjitStock = await loadCSV(Sheets.sjitStock);

    updateSplash(60, "Loading SOR Stock...");
    const sorStock = await loadCSV(Sheets.sorStock);

    updateSplash(72, "Loading Seller Stock...");
    const sellerStock = await loadCSV(Sheets.sellerStock);

    updateSplash(85, "Loading Product Master...");
    const productMaster = await loadCSV(Sheets.productMaster);

    updateSplash(95, "Loading Traffic...");
    const traffic = await loadCSV(Sheets.traffic);

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

    updateSplash(100, "Launching Phoenix...");

    return DataStore;

}