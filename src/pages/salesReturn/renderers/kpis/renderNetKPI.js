/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Net KPI
 * Version : V1.0
 * =====================================================
 */

import {

    renderKPICard

}

from "../../../../components/common/kpi/renderKPICard.js";

/**
 * =====================================================
 * Render Net KPI
 * =====================================================
 */

export async function renderNetKPI(

    target,

    data={}

){

    await renderKPICard(

        target,

        {

            title:

                "Net",

            data

        }

    );

}