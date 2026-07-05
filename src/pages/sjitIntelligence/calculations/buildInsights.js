/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Insight Builder
 * Version : V1.0
 * =====================================================
 */

export function buildInsights(

    fcReport,

    stateReport

){

    const insights=[];

    /**
     * ==========================================
     * Top FC
     * ==========================================
     */

    if(

        fcReport.length

    ){

        const topFC=

            fcReport[0];

        insights.push({

            type:"success",

            title:"Top Performing FC",

            message:

                `${topFC.fc} sold ${topFC.soldQty.toLocaleString()} units.`

        });

    }

    /**
     * ==========================================
     * Top State
     * ==========================================
     */

    if(

        stateReport.length

    ){

        const topState=

            stateReport[0];

        insights.push({

            type:"info",

            title:"Top Selling State",

            message:

                `${topState.state} contributed ${topState.contribution.toFixed(1)}% of SJIT sales.`

        });

    }

    /**
     * ==========================================
     * Highest Gap
     * ==========================================
     */

    if(

        fcReport.length

    ){

        const highestGap=

            fcReport

            .slice()

            .sort(

                (a,b)=>

                    b.gap-

                    a.gap

            )[0];

        insights.push({

            type:

                highestGap.gap>=0

                ?

                "warning"

                :

                "danger",

            title:"Stock Opportunity",

            message:

                `${highestGap.fc} has a ${highestGap.gap.toFixed(1)}% stock-demand gap.`

        });

    }

    return insights;

}