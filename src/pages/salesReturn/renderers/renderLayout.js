/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Layout
 * Version : V1.0
 * =====================================================
 */

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

}