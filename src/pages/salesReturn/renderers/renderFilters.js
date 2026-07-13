/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Filters
 * Version : V1.0
 * =====================================================
 */

export async function renderFilters(

    target

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="filters-grid">

        <div id="filterSaleMonth"></div>

        <div id="filterBrand"></div>

        <div id="filterPOType"></div>

        <div id="filterRisk"></div>

        <div id="filterStyleSearch"></div>

    </div>

</div>

`;

}