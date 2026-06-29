/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

import {

    consolidateAds

} from "./adsConsolidator.js";

import {

    buildAdsKpis

} from "./adsKpi.js";

import {

    buildAdsChart

} from "./adsChart.js";

import {

    getDailyAdsColumns,

    getCampaignAdsColumns,

    getAdgroupAdsColumns

} from "./adsColumns.js";

export function generateAdsReport(options={}){

    const saleDays=

        Number(

            options.saleDays||30

        );

    const consolidated=

        consolidateAds(

            DataStore.cdr,

            saleDays

        );

    const daily=

        consolidated.daily;

    const campaign=

        consolidated.campaign;

    const adgroup=

        consolidated.adgroup;

    return{

        kpis:

            buildAdsKpis(

                daily

            ),

        chart:

            buildAdsChart(

                daily

            ),

        reports:{

            daily:{

                title:

                    "Daily Ads Spend",

                columns:

                    getDailyAdsColumns(),

                rows:

                    daily

            },

            campaign:{

                title:

                    "Campaign Report",

                columns:

                    getCampaignAdsColumns(),

                rows:

                    campaign

            },

            adgroup:{

                title:

                    "Ad Group Report",

                columns:

                    getAdgroupAdsColumns(),

                rows:

                    adgroup

            }

        }

    };

}