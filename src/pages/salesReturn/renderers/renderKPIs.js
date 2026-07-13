/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : KPI Layout
 * Version : V1.0
 * =====================================================
 */

export async function renderKPIs(

    target

){

    target.innerHTML=`

<div class="kpi-grid">

    <div
    id="kpiSale">
    </div>

    <div
    id="kpiCancel">
    </div>

    <div
    id="kpiRTO">
    </div>

    <div
    id="kpiCXReturn">
    </div>

    <div
    id="kpiNet">
    </div>

</div>

`;

}