/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Filters
 * Version : V1.0
 * =====================================================
 */

export async function renderFilters(

    target

){

    target.innerHTML = `

<div class="demand-filter-bar">

    <select id="diBrandFilter">

        <option value="">

            All Brands

        </option>

    </select>

    <select id="diCategoryFilter">

        <option value="">

            All Categories

        </option>

    </select>

    <select id="diStatusFilter">

        <option value="">

            All ERP Status

        </option>

    </select>

    <input
        id="diDateFilter"
        type="month">

    <input
        id="diSearch"
        type="text"
        placeholder="Search Style ID / ERP SKU">

    <button
        id="diResetFilters"
        class="di-reset-btn">

        Reset

    </button>

</div>

`;

}