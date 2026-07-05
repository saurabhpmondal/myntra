/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Layout
 * Version : V1.1
 * =====================================================
 */

export async function renderLayout(

    target

){

    target.innerHTML=`

<div class="dashboard-section">

    <div id="sjitHeader"></div>

</div>

<div class="dashboard-section">

    <div id="sjitKPIs"></div>

</div>

<div class="dashboard-section">

    <div id="sjitInsights"></div>

</div>

<div
    class="dashboard-section"
    style="
        display:grid;
        grid-template-columns:2fr 1fr;
        gap:20px;
    "
>

    <div id="sjitMap"></div>

    <div id="sjitPie"></div>

</div>

<div class="dashboard-section">

    <div id="sjitFCReport"></div>

</div>

<div
    class="dashboard-section"
    style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
    "
>

    <div id="sjitStateReport"></div>

    <div id="sjitRegionReport"></div>

</div>

`;

}