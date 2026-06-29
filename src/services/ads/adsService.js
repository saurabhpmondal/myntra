/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads Service
 * Version : V1.1
 * =====================================================
 */

import { DataStore } from "../dataService.js";

import { FilterState } from "../filterService.js";

import { consolidateAds } from "./adsConsolidator.js";

import { buildAdsKpis } from "./adsKpi.js";

import { buildAdsChart } from "./adsChart.js";

import {

    getDailyAdsColumns,

    getCampaignAdsColumns,

    getAdgroupAdsColumns

} from "./adsColumns.js";

export function generateAdsReport(){

    const ads = getFilteredAds();

    const consolidated = consolidateAds(ads);

    return{

        kpis:

            buildAdsKpis(

                consolidated.daily

            ),

        chart:

            buildAdsChart(

                consolidated.daily

            ),

        reports:{

            daily:{

                title:"Daily Ads Spend",

                columns:

                    getDailyAdsColumns(),

                rows:

                    consolidated.daily

            },

            campaign:{

                title:"Campaign Report",

                columns:

                    getCampaignAdsColumns(),

                rows:

                    consolidated.campaign

            },

            adgroup:{

                title:"Ad Group Report",

                columns:

                    getAdgroupAdsColumns(),

                rows:

                    consolidated.adgroup

            }

        }

    };

}

function getFilteredAds(){

    if(

        !FilterState.period

    ){

        return DataStore.ads;

    }

    return DataStore.ads.filter(row=>{

        const period =

            `${row.month}-${row.year}`;

        return(

            period===

            FilterState.period

        );

    });

}