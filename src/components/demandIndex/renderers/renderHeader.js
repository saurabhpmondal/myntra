/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Header
 * Version : V1.0
 * =====================================================
 */

export async function renderHeader(

    target

){

    target.innerHTML = `

<div class="demand-header">

    <div class="demand-header-left">

        <div class="demand-icon">

            📊

        </div>

        <div>

            <h1>

                Demand Index

            </h1>

            <p>

                Rank every style based on contribution, demand weight,
                movement and business impact.

            </p>

        </div>

    </div>

    <div class="demand-header-right">

        <button
            id="exportDemandIndex"
            class="demand-export-btn">

            ⬇ Export

        </button>

    </div>

</div>

`;

}