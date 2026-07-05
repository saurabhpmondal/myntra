/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Layout
 * Version : V1.0
 * =====================================================
 */

export async function renderLayout(

    target

){

    target.innerHTML=`

<div id="sjitHeader"></div>

<div id="sjitKPIs"></div>

<div id="sjitInsights"></div>

<div
    style="
        display:grid;
        grid-template-columns:2fr 1fr;
        gap:20px;
        margin-top:20px;
    "
>

    <div id="sjitMap"></div>

    <div id="sjitPie"></div>

</div>

<div
    id="sjitFCReport"
    style="margin-top:20px;"
></div>

<div
    style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
        margin-top:20px;
    "
>

    <div id="sjitStateReport"></div>

    <div id="sjitRegionReport"></div>

</div>

`;

}