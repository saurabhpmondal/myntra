/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sale KPI
 * Version : V1.0
 * =====================================================
 */

import {

    renderKPICard

}

from "../../../../components/common/kpi/renderKPICard.js";

/**
 * =====================================================
 * Render Sale KPI
 * =====================================================
 */

export async function renderSaleKPI(

    target,

    data={}

){

    await renderKPICard(

        target,

        {

            title:

                "Sale",

            data

        }

    );

}