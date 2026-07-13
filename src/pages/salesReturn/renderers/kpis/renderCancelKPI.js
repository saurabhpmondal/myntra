/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Cancel KPI
 * Version : V1.0
 * =====================================================
 */

import {

    renderKPICard

}

from "../../../../components/common/kpi/renderKPICard.js";

/**
 * =====================================================
 * Render Cancel KPI
 * =====================================================
 */

export async function renderCancelKPI(

    target,

    data={}

){

    await renderKPICard(

        target,

        {

            title:

                "Cancelled",

            data

        }

    );

}