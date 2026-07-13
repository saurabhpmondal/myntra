/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Customer Return KPI
 * Version : V1.0
 * =====================================================
 */

import {

    renderKPICard

}

from "../../../../components/common/kpi/renderKPICard.js";

/**
 * =====================================================
 * Render Customer Return KPI
 * =====================================================
 */

export async function renderCXReturnKPI(

    target,

    data={}

){

    await renderKPICard(

        target,

        {

            title:

                "CX Return",

            data

        }

    );

}