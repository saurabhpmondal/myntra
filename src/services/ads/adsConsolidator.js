/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads Consolidator
 * Version : V1.0
 * =====================================================
 */

import {

    filterAdsByDays,

    buildSystemDate,

    formatDisplayDate

} from "./adsDate.js";

import {

    calculateAdsMetrics,

    mergeAdsMetrics,

    finalizeAdsMetrics,

    createEmptyAdsMetrics

} from "./adsCalculation.js";

export function consolidateAds(

    rows,

    saleDays

){

    const filteredRows=

        filterAdsByDays(

            rows,

            saleDays

        );

    const dailyMap=

        new Map();

    const campaignMap=

        new Map();

    const adgroupMap=

        new Map();

    filteredRows.forEach(row=>{

        const metrics=

            calculateAdsMetrics(row);

        consolidateDaily(

            dailyMap,

            row,

            metrics

        );

        consolidateCampaign(

            campaignMap,

            row,

            metrics

        );

        consolidateAdgroup(

            adgroupMap,

            row,

            metrics

        );

    });

    return{

        daily:

            finalizeMap(

                dailyMap

            ),

        campaign:

            finalizeMap(

                campaignMap

            ),

        adgroup:

            finalizeMap(

                adgroupMap

            )

    };

}

function consolidateDaily(

    map,

    row,

    metrics

){

    const key=

        buildSystemDate(row);

    if(

        !map.has(key)

    ){

        map.set(

            key,

            {

                date:

                    formatDisplayDate(

                        key

                    ),

                ...createEmptyAdsMetrics()

            }

        );

    }

    mergeAdsMetrics(

        map.get(key),

        metrics

    );

}

function consolidateCampaign(

    map,

    row,

    metrics

){

    const key=

        row.campaign_id;

    if(

        !map.has(key)

    ){

        map.set(

            key,

            {

                campaignId:

                    row.campaign_id,

                campaignName:

                    row.campaign_name,

                ...createEmptyAdsMetrics()

            }

        );

    }

    mergeAdsMetrics(

        map.get(key),

        metrics

    );

}

function consolidateAdgroup(

    map,

    row,

    metrics

){

    const key=

        row.adgroup_id;

    if(

        !map.has(key)

    ){

        map.set(

            key,

            {

                adgroupId:

                    row.adgroup_id,

                adgroupName:

                    row.adgroup_name,

                ...createEmptyAdsMetrics()

            }

        );

    }

    mergeAdsMetrics(

        map.get(key),

        metrics

    );

}

function finalizeMap(

    map

){

    return Array

        .from(

            map.values()

        )

        .map(row=>

            finalizeAdsMetrics(

                row

            )

        );

}