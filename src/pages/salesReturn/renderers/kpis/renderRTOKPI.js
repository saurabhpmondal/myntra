/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : RTO KPI
 * Version : V1.0
 * =====================================================
 */

import {

    renderKPICard

}

from "../../../../components/common/kpi/renderKPICard.js";

/**
 * =====================================================
 * Render RTO KPI
 * =====================================================
 */

export async function renderRTOKPI(

    target,

    data={}

){

    await renderKPICard(

        target,

        {

            title:

                "RTO",

            data

        }

    );

}