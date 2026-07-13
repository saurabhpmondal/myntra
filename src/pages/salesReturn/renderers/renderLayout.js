/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Layout
 * Version : V2.0
 * =====================================================
 */

import {

    renderHeader

}

from "./renderHeader.js";

import {

    renderFilters

}

from "./renderFilters.js";

import {

    renderKPIs

}

from "./renderKPIs.js";

import {

    renderPOType

}

from "./renderPOType.js";

import {

    renderBrand

}

from "./renderBrand.js";

import {

    renderStyle

}

from "./renderStyle.js";

import {

    renderReturnReason

}

from "./renderReturnReason.js";

import {

    renderTrend

}

from "./renderTrend.js";

export async function renderLayout(

    target

){

    target.innerHTML=`

<div
class="sales-return-page"
id="salesReturnPage">

    <div
    id="salesReturnHeader">
    </div>

    <div
    id="salesReturnFilters">
    </div>

    <div
    id="salesReturnKPIs">
    </div>

    <div
    id="salesReturnPOType">
    </div>

    <div
    id="salesReturnBrand">
    </div>

    <div
    id="salesReturnStyle">
    </div>

    <div
    id="salesReturnReason">
    </div>

    <div
    id="salesReturnTrend">
    </div>

</div>

`;

    await renderHeader(

        document.getElementById(

            "salesReturnHeader"

        )

    );

    await renderFilters(

        document.getElementById(

            "salesReturnFilters"

        )

    );

    await renderKPIs(

        document.getElementById(

            "salesReturnKPIs"

        )

    );

    await renderPOType(

        document.getElementById(

            "salesReturnPOType"

        )

    );

    await renderBrand(

        document.getElementById(

            "salesReturnBrand"

        )

    );

    await renderStyle(

        document.getElementById(

            "salesReturnStyle"

        )

    );

    await renderReturnReason(

        document.getElementById(

            "salesReturnReason"

        )

    );

    await renderTrend(

        document.getElementById(

            "salesReturnTrend"

        )

    );

}