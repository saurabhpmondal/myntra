/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { initializeDemandIndex } from "./services/demandIndexService.js";

/**
 * =====================================================
 * Render Demand Index
 * =====================================================
 */

export async function renderDemandIndex(

    target

){

    await createComponent({

        target,

        html:"src/components/demandIndex/demandIndex.html",

        css:"src/components/demandIndex/demandIndex.css"

    });

    buildLayout(

        target

    );

    await initializeDemandIndex(

        target

    );

}

/**
 * =====================================================
 * Build Layout
 * =====================================================
 */

function buildLayout(

    target

){

    target.innerHTML=`

<div
class="demand-index-page">

    <div
    id="demandLoader"
    class="demand-loader">

        Loading Demand Index...

    </div>

    <div
    id="demandHeader">

    </div>

    <div
    id="demandFilters">

    </div>

    <div
    id="demandKPIs"
    class="di-kpi-grid">

    </div>

    <div
    id="demandEmpty"
    class="demand-empty"
    style="display:none;">

        No data found.

    </div>

    <div
    id="demandTable">

    </div>

</div>

`;

}

/**
 * =====================================================
 * Loader
 * =====================================================
 */

export function showDemandLoader(){

    const loader=

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display=

            "flex";

    }

}

/**
 * =====================================================
 * Hide Loader
 * =====================================================
 */

export function hideDemandLoader(){

    const loader=

        document.getElementById(

            "demandLoader"

        );

    if(loader){

        loader.style.display=

            "none";

    }

}

/**
 * =====================================================
 * Empty State
 * =====================================================
 */

export function showDemandEmpty(

    message="No data available."

){

    const empty=

        document.getElementById(

            "demandEmpty"

        );

    if(!empty){

        return;

    }

    empty.innerHTML=

        message;

    empty.style.display=

        "flex";

}

/**
 * =====================================================
 * Hide Empty State
 * =====================================================
 */

export function hideDemandEmpty(){

    const empty=

        document.getElementById(

            "demandEmpty"

        );

    if(empty){

        empty.style.display=

            "none";

    }

}