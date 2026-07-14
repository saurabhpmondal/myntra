/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Layout
 * Version : V2.1
 * =====================================================
 */

import {
    renderHeader
} from "./renderHeader.js";

import {
    renderFilters
} from "./renderFilters.js";

import {
    renderKPIs
} from "./renderKPIs.js";

import {
    renderInsights
} from "./renderInsights.js";

import {
    renderPOType
} from "./renderPOType.js";

import {
    renderBrand
} from "./renderBrand.js";

import {
    renderStyle
} from "./renderStyle.js";

import {
    renderReturnReason
} from "./renderReturnReason.js";

import {
    renderTrend
} from "./renderTrend.js";

export async function renderLayout(target){

    target.innerHTML = `

<div class="sales-return-page" id="salesReturnPage">

    <div id="salesReturnHeader"></div>

    <div id="salesReturnFilters"></div>

    <div id="salesReturnKPIs"></div>

    <div id="salesReturnInsights"></div>

    <div id="salesReturnPOType"></div>

    <div id="salesReturnBrand"></div>

    <div id="salesReturnStyle"></div>

    <div id="salesReturnReturnReason"></div>

    <div id="salesReturnTrend"></div>

</div>

`;

    await renderHeader(
        document.getElementById("salesReturnHeader")
    );

    await renderFilters(
        document.getElementById("salesReturnFilters")
    );

    await renderKPIs(
        document.getElementById("salesReturnKPIs")
    );

    await renderInsights(
        document.getElementById("salesReturnInsights")
    );

    await renderPOType(
        document.getElementById("salesReturnPOType")
    );

    await renderBrand(
        document.getElementById("salesReturnBrand")
    );

    await renderStyle(
        document.getElementById("salesReturnStyle")
    );

    await renderReturnReason(
        document.getElementById("salesReturnReturnReason")
    );

    await renderTrend(
        document.getElementById("salesReturnTrend")
    );

}