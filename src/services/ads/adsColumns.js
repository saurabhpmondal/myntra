/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads Columns
 * Version : V1.0
 * =====================================================
 */

export function getDailyAdsColumns(){

    return[

        {

            key:"date",

            label:"Date"

        },

        {

            key:"spend",

            label:"Spend"

        },

        {

            key:"impressions",

            label:"Impressions"

        },

        {

            key:"clicks",

            label:"Clicks"

        },

        {

            key:"ctr",

            label:"CTR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"cvr",

            label:"CVR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"units",

            label:"Units Sold"

        },

        {

            key:"revenue",

            label:"Revenue"

        },

        {

            key:"roi",

            label:"ROI",

            renderer:value=>

                Number(value).toFixed(2)

        }

    ];

}

export function getCampaignAdsColumns(){

    return[

        {

            key:"campaignName",

            label:"Campaign"

        },

        {

            key:"spend",

            label:"Spend"

        },

        {

            key:"impressions",

            label:"Impressions"

        },

        {

            key:"clicks",

            label:"Clicks"

        },

        {

            key:"ctr",

            label:"CTR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"cvr",

            label:"CVR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"units",

            label:"Units Sold"

        },

        {

            key:"revenue",

            label:"Revenue"

        },

        {

            key:"roi",

            label:"ROI",

            renderer:value=>

                Number(value).toFixed(2)

        }

    ];

}

export function getAdgroupAdsColumns(){

    return[

        {

            key:"adgroupName",

            label:"Ad Group"

        },

        {

            key:"spend",

            label:"Spend"

        },

        {

            key:"impressions",

            label:"Impressions"

        },

        {

            key:"clicks",

            label:"Clicks"

        },

        {

            key:"ctr",

            label:"CTR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"cvr",

            label:"CVR",

            renderer:value=>

                `${Number(value).toFixed(2)}%`

        },

        {

            key:"units",

            label:"Units Sold"

        },

        {

            key:"revenue",

            label:"Revenue"

        },

        {

            key:"roi",

            label:"ROI",

            renderer:value=>

                Number(value).toFixed(2)

        }

    ];

}