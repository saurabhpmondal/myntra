/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Table Config
 * Version : V2.0
 * =====================================================
 */

/**
 * =====================================================
 * Columns
 * =====================================================
 */

export const DemandIndexColumns=[

    {

        key:"overallRank",

        label:"Overall Rank",

        align:"center"

    },

    {

        key:"brandRank",

        label:"Brand Rank",

        align:"center"

    },

    {

        key:"styleId",

        label:"Style ID",

        align:"center",

        renderer:value=>`

<a

href="https://www.myntra.com/${value}"

target="_blank"

class="di-style-link">

${value}

</a>

`

    },

    {

        key:"erpSku",

        label:"ERP SKU",

        align:"center"

    },

    {

        key:"brand",

        label:"Brand",

        align:"left"

    },

    {

        key:"category",

        label:"Category",

        align:"left"

    },

    {

        key:"erpStatus",

        label:"ERP Status",

        align:"center"

    },

    {

        key:"unitsSold",

        label:"Units Sold",

        align:"center",

        format:"number"

    },

    {

        key:"overallDW",

        label:"Overall DW",

        align:"center",

        renderer:value=>

`${(value*100).toFixed(2)}%`

    },

    {

        key:"brandDW",

        label:"Brand DW",

        align:"center",

        renderer:value=>

`${(value*100).toFixed(2)}%`

    },

    {

        key:"cumulativeDW",

        label:"Cumulative DW",

        align:"center",

        renderer:value=>

`${(value*100).toFixed(2)}%`

    },

    {

        key:"badges",

        label:"Badges",

        align:"left",

        renderer:renderBadges

    }

];

/**
 * =====================================================
 * Badge Renderer
 * =====================================================
 */

function renderBadges(

    badges=[]

){

    if(

        !Array.isArray(

            badges

        ) ||

        !badges.length

    ){

        return "-";

    }

    return badges.map(

        badge=>`

<span class="di-badge">

${badge}

</span>

`

    ).join("");

}

/**
 * =====================================================
 * Build Table Config
 * =====================================================
 */

export function getDemandIndexTableConfig(

    target,

    rows=[]

){

    return{

        target,

        title:

            "Demand Index",

        subtitle:

            `Showing ${rows.length.toLocaleString()} ranked styles`,

        columns:

            DemandIndexColumns,

        rows:

            rows.map(

                row=>({

                    overallRank:

                        row.overallRank,

                    brandRank:

                        row.brandRank,

                    styleId:

                        row.styleId,

                    erpSku:

                        row.erpSku,

                    brand:

                        row.brand,

                    category:

                        row.category,

                    erpStatus:

                        row.erpStatus,

                    unitsSold:

                        row.unitsSold,

                    overallDW:

                        row.overallDW,

                    brandDW:

                        row.brandDW,

                    cumulativeDW:

                        row.cumulativeDW,

                    badges:

                        row.badges

                })

            )

    };

}