/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Header
 * Version : V1.0
 * =====================================================
 */

export async function renderHeader(

    target

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="dashboard-header">

        <div>

            <h2>

                Sales & Return Intelligence

            </h2>

            <p>

                Analyze sales, cancellations, RTO, customer returns and business impact with previous period comparison.

            </p>

        </div>

        <div
        id="salesReturnExport">

        </div>

    </div>

</div>

`;

}