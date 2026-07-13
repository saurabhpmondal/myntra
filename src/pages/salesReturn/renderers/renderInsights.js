/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Insights Renderer
 * Version : V1.0
 * =====================================================
 */

export async function renderInsights(

    target,

    insights=[]

){

    target.innerHTML=

        insights.map(

            buildCard

        ).join("");

}

/**
 * =====================================================
 * Insight Card
 * =====================================================
 */

function buildCard(

    insight

){

    return `

<div class="insight-card ${getClass(

    insight.type

)}">

    <div class="insight-title">

        ${insight.title}

    </div>

    <div class="insight-message">

        ${insight.message}

    </div>

</div>

`;

}

/**
 * =====================================================
 * Card Class
 * =====================================================
 */

function getClass(

    type

){

    switch(

        type

    ){

        case "success":

            return "insight-success";

        case "warning":

            return "insight-warning";

        case "danger":

            return "insight-danger";

        default:

            return "insight-info";

    }

}