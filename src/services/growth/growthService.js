/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Service
 * Version : V1.0
 * =====================================================
 */

import { getGrowthBaseData } from "./growthHelper.js";
import { buildGrowthLookups, getLookup } from "./growthLookupEngine.js";
import { buildMonthData } from "./growthMonthEngine.js";
import {
    buildProjectionData,
    growthColor,
    projectionColor
} from "./growthProjectionEngine.js";
import { buildDailyData } from "./growthDailyEngine.js";

export function getGrowthReport(){

    buildGrowthLookups();

    const base = getGrowthBaseData();

    const months = buildMonthData(base);

    const projection = buildProjectionData(base);

    const daily = buildDailyData(base);

    const columns = [

        {
            key:"styleId",
            label:"Style",
            align:"left"
        },

        {
            key:"erpSku",
            label:"ERP SKU",
            align:"left"
        },

        {
            key:"brand",
            label:"Brand",
            align:"left"
        },

        {
            key:"rating",
            label:"Rating",
            align:"center"
        },

        {
            key:"status",
            label:"Status",
            align:"center"
        },

        {
            key:"previous2",
            label:months.previous2Label,
            align:"center",
            format:"number"
        },

        {
            key:"previous",
            label:months.previousLabel,
            align:"center",
            format:"number"
        },

        {
            key:"current",
            label:months.currentLabel,
            align:"center",
            format:"number"
        },

        {
            key:"growth",
            label:"Growth %",
            align:"center"
        },

        {
            key:"drr",
            label:"DRR",
            align:"center"
        },

        {
            key:"projection",
            label:"Projection",
            align:"center",
            format:"number"
        },

        ...daily.dayColumns

    ];

    const rows = [];

    base.styleIds.forEach(styleId=>{

        const lookup = getLookup(styleId);

        const currentRows = base.currentRows.filter(
            r=>String(r.style_id)===styleId
        );

        const first = currentRows[0] ||
            base.previousRows.find(r=>String(r.style_id)===styleId) ||
            base.previous2Rows.find(r=>String(r.style_id)===styleId);

        if(!first){

            return;

        }

        const row = {

            styleId,

            erpSku:lookup.erpSku,

            brand:first.brand || "",

            rating:lookup.rating,

            status:lookup.status,

            previous2:
                months.previous2Values[styleId] || 0,

            previous:
                months.previousValues[styleId] || 0,

            current:
                months.values[styleId] || 0,

            growth:
                projection.growth[styleId] || 0,

            drr:
                projection.drr[styleId] || 0,

            projection:
                projection.projection[styleId] || 0,

            __growthClass:
                growthColor(
                    projection.growth[styleId]
                ),

            __projectionClass:
                projectionColor(
                    projection.projection[styleId],
                    months.previousValues[styleId]
                )

        };

        daily.dayColumns.forEach(col=>{

            row[col.key] =

                daily.values[styleId]?.[col.key] || 0;

            row[`__${col.key}`] =

                daily.colors[styleId]?.[col.key] || "";

        });

        rows.push(row);

    });

    rows.sort((a,b)=>

        b.projection-a.projection

    );

    return{

        columns,

        rows,

        maxDay:daily.maxDay

    };

}