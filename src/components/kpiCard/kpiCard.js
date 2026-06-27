/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Card
 * Author  : Saurabh Mondal & Magical CTO
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

export async function renderKPICard(target, options) {

    await createComponent({

        target,

        html: "src/components/kpiCard/kpiCard.html",

        css: "src/components/kpiCard/kpiCard.css",

        data: {

            title: options.title,

            value: options.value,

            icon: options.icon,

            change: options.change,

            trendClass: options.trend

        }

    });

}