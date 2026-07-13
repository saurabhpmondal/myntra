/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Insights
 * Version : V1.0
 * =====================================================
 */

import {

    BUSINESS_RULES

}

from "../config/businessRules.js";

/**
 * =====================================================
 * Build Insights
 * =====================================================
 */

export function buildInsights(

    kpis={}

){

    const insights=[];

    const sale=

        kpis.sale?.units?.current||0;

    const cancel=

        kpis.cancel?.units?.current||0;

    const rto=

        kpis.rto?.units?.current||0;

    const cx=

        kpis.cxReturn?.units?.current||0;

    const net=

        kpis.net?.units?.current||0;

    if(

        sale===0

    ){

        insights.push({

            type:"info",

            title:"No Sales",

            message:

                "No sales found for selected filters."

        });

        return insights;

    }

    const returnRate=

        (

            (

                rto+

                cx

            )

            /

            sale

        )*100;

    if(

        returnRate>

        BUSINESS_RULES.RISK.MID

    ){

        insights.push({

            type:"danger",

            title:"High Return Rate",

            message:

                `Return rate is ${returnRate.toFixed(1)}%.`

        });

    }

    if(

        cancel>

        0

    ){

        insights.push({

            type:"warning",

            title:"Cancelled Orders",

            message:

                `${cancel} cancelled units found.`

        });

    }

    if(

        cx>

        rto

    ){

        insights.push({

            type:"warning",

            title:"Customer Returns Higher",

            message:

                "Customer returns are higher than RTO."

        });

    }

    if(

        net<=0

    ){

        insights.push({

            type:"danger",

            title:"Negative Net Sale",

            message:

                "Net sale is zero or negative."

        });

    }

    if(

        !insights.length

    ){

        insights.push({

            type:"success",

            title:"Healthy Business",

            message:

                "No major business concern detected."

        });

    }

    return insights;

}