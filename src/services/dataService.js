/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Data Service
 * Version : V3.2
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

async function loadSheet(name,url){

    console.time(name);

    try{

        const data = await loadCSV(url);

        console.timeEnd(name);

        console.log(`✅ ${name}: ${data.length}`);

        return data;

    }

    catch(error){

        console.error(`❌ ${name}`,error);

        return [];

    }

}

export async function initializeData(){

    if(DataStore.loaded){

        return DataStore;

    }

    console.log("🚀 Loading Phoenix Data Engine...");

    updateSplash(5,"Connecting to Google Sheets...");

    const jobs=[

        {
            key:"sales",
            title:"Sales",
            url:Sheets.sales
        },

        {
            key:"returns",
            title:"Returns",
            url:Sheets.returns
        },

        {
            key:"sjitStock",
            title:"SJIT Stock",
            url:Sheets.sjitStock
        },

        {
            key:"sorStock",
            title:"SOR Stock",
            url:Sheets.sorStock
        },

        {
            key:"sellerStock",
            title:"Seller Stock",
            url:Sheets.sellerStock
        },

        {
            key:"productMaster",
            title:"Product Master",
            url:Sheets.productMaster
        },

        {
            key:"traffic",
            title:"Traffic",
            url:Sheets.traffic
        },

        {
            key:"listings",
            title:"Listings",
            url:Sheets.listings
        },

        {
            key:"inventory",
            title:"Inventory",
            url:Sheets.inventory
        }

    ];

    const promises = jobs.map((job,index)=>{

        updateSplash(

            10 + (index*8),

            `Loading ${job.title}...`

        );

        return loadSheet(

            job.title,

            job.url

        );

    });

    const results = await Promise.allSettled(promises);

    results.forEach((result,index)=>{

        const key = jobs[index].key;

        if(result.status==="fulfilled"){

            DataStore[key]=result.value;

        }

        else{

            console.error(

                `❌ Failed : ${jobs[index].title}`,

                result.reason

            );

            DataStore[key]=[];

        }

    });

    console.table({

        Sales:DataStore.sales.length,

        Returns:DataStore.returns.length,

        SJIT:DataStore.sjitStock.length,

        SOR:DataStore.sorStock.length,

        SellerStock:DataStore.sellerStock.length,

        ProductMaster:DataStore.productMaster.length,

        Traffic:DataStore.traffic.length,

        Listings:DataStore.listings.length,

        Inventory:DataStore.inventory.length

    });

    updateSplash(98,"Building Lookups...");

    buildLookups();

    DataStore.loaded=true;

    updateSplash(100,"Launching Phoenix...");

    console.log("✅ Phoenix Ready");

    return DataStore;

}