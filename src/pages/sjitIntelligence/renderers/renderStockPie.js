/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Stock Pie Renderer
 * Version : V1.0
 * =====================================================
 */

export async function renderStockPie(

    target

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="card-header">

        <div>

            <h3>

                FC Stock Distribution

            </h3>

            <p>

                Current SJIT Stock by Fulfilment Centre

            </p>

        </div>

    </div>

    <div

        id="sjitStockPie"

        style="

            width:100%;

            height:420px;

        "

    ></div>

</div>

`;

}