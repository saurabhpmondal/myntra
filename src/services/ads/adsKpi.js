/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads KPI Engine
 * Version : V1.0
 * =====================================================
 */

import {

    createEmptyAdsMetrics,

    mergeAdsMetrics,

    finalizeAdsMetrics

} from "./adsCalculation.js";

export function buildAdsKpis(

    dailyRows

){

    const total=

        createEmptyAdsMetrics();

    dailyRows.forEach(row=>{

        mergeAdsMetrics(

            total,

            row

        );

    });

    finalizeAdsMetrics(

        total

    );

    return[

        {

            title:

                "Impressions",

            value:

                total.impressions,

            className:

                "primary"

        },

        {

            title:

                "Clicks",

            value:

                total.clicks,

            className:

                "info"

        },

        {

            title:

                "CTR",

            value:

                `${total.ctr.toFixed(2)}%`,

            className:

                "warning"

        },

        {

            title:

                "Units Sold",

            value:

                total.units,

            className:

                "success"

        },

        {

            title:

                "Revenue",

            value:

                total.revenue,

            prefix:

                "₹",

            className:

                "success"

        },

        {

            title:

                "Spend",

            value:

                total.spend,

            prefix:

                "₹",

            className:

                "danger"

        },

        {

            title:

                "ROI",

            value:

                total.roi.toFixed(2),

            className:

                "primary"

        }

    ];

}