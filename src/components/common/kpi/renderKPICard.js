/**
 * =====================================================
 * Project Phoenix
 * Product : Phoenix
 * Module  : KPI Card
 * Version : V1.0
 * =====================================================
 */

export async function renderKPICard(

    target,

    {

        title,

        data

    }

){

    if(

        !target

    ){

        return;

    }

    target.innerHTML=`

<div class="dashboard-card kpi-card">

    <div class="kpi-title">

        ${title}

    </div>

    <div class="kpi-main">

        ${formatCurrency(

            data?.gmv?.current

        )}

    </div>

    <div class="kpi-growth">

        ${buildGrowth(

            data?.gmv?.growth

        )}

    </div>

    <div class="kpi-divider">

    </div>

    <div class="kpi-units">

        ${formatNumber(

            data?.units?.current

        )} Units

    </div>

    <div class="kpi-growth-small">

        ${buildGrowth(

            data?.units?.growth

        )}

    </div>

</div>

`;

}

/**
 * =====================================================
 * Currency
 * =====================================================
 */

function formatCurrency(

    value=0

){

    return Number(

        value

    ).toLocaleString(

        "en-IN",

        {

            style:"currency",

            currency:"INR",

            maximumFractionDigits:0

        }

    );

}

/**
 * =====================================================
 * Number
 * =====================================================
 */

function formatNumber(

    value=0

){

    return Number(

        value

    ).toLocaleString(

        "en-IN"

    );

}

/**
 * =====================================================
 * Growth
 * =====================================================
 */

function buildGrowth(

    growth={}

){

    if(

        !growth

    ){

        return "-";

    }

    const icon=

        growth.direction==="up"

        ?"▲"

        :

        growth.direction==="down"

        ?"▼"

        :

        "•";

    return `

${icon}

${growth.value}%

`;

}