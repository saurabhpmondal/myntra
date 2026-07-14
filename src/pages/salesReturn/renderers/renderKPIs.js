/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Renderer
 * Version : V12.0
 * =====================================================
 */

import { renderKPIGrid } from "../../../components/common/kpi/renderKPIGrid.js";

export async function renderKPIs(target,dashboard={}){

    if(!target){

        return;

    }

    const cards=[

        {
            title:"Sale",
            value:dashboard.sale?.gmv||0,
            subValue:dashboard.sale?.units||0,
            type:"currency-unit"
        },

        {
            title:"Cancel",
            value:dashboard.cancel?.gmv||0,
            subValue:dashboard.cancel?.units||0,
            type:"currency-unit"
        },

        {
            title:"RTO",
            value:dashboard.rto?.gmv||0,
            subValue:dashboard.rto?.units||0,
            type:"currency-unit"
        },

        {
            title:"CX Return",
            value:dashboard.cx?.gmv||0,
            subValue:dashboard.cx?.units||0,
            type:"currency-unit"
        },

        {
            title:"Net",
            value:dashboard.net?.gmv||0,
            subValue:dashboard.net?.units||0,
            type:"currency-unit"
        }

    ];

    await renderKPIGrid(

        target,

        cards

    );

}