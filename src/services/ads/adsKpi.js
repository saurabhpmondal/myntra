/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads KPI Engine
 * Version : V1.1
 * =====================================================
 */

import {

    createEmptyAdsMetrics,

    mergeAdsMetrics,

    finalizeAdsMetrics

} from "./adsCalculation.js";

export function buildAdsKpis(dailyRows){

    const total = createEmptyAdsMetrics();

    dailyRows.forEach(row=>{

        mergeAdsMetrics(

            total,

            row

        );

    });

    finalizeAdsMetrics(total);

    return [

        {

            title:"Impressions",

            value:total.impressions,

            icon:"eye",

            className:"primary"

        },

        {

            title:"Clicks",

            value:total.clicks,

            icon:"mouse-pointer-click",

            className:"info"

        },

        {

            title:"CTR",

            value:`${total.ctr.toFixed(2)}%`,

            icon:"percent",

            className:"warning"

        },

        {

            title:"Units Sold",

            value:total.units,

            icon:"shopping-cart",

            className:"success"

        },

        {

            title:"Revenue",

            value:total.revenue,

            prefix:"₹",

            icon:"indian-rupee",

            className:"success"

        },

        {

            title:"Spend",

            value:total.spend,

            prefix:"₹",

            icon:"wallet",

            className:"danger"

        },

        {

            title:"ROI",

            value:total.roi.toFixed(2),

            icon:"trending-up",

            className:"primary"

        }

    ];

}