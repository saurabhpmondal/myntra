/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Map Renderer
 * Version : V1.0
 * =====================================================
 */

export async function renderMap(

    target

){

    target.innerHTML=`

<div class="dashboard-card">

    <div class="card-header">

        <div>

            <h3>

                India Sales Heat Map

            </h3>

            <p>

                State Wise SJIT Sales Distribution

            </p>

        </div>

    </div>

    <div

        id="sjitIndiaMap"

        style="

            width:100%;

            height:500px;

        "

    ></div>

</div>

`;

}