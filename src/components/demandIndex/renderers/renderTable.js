/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Table
 * Version : V1.0
 * =====================================================
 */

export async function renderTable(

    target

){

    target.innerHTML = `

<div class="di-table-wrapper">

    <table class="di-table">

        <thead>

            <tr>

                <th>👁</th>

                <th>Overall Rank</th>

                <th>Brand Rank</th>

                <th>Style ID</th>

                <th>ERP SKU</th>

                <th>Brand</th>

                <th>Status</th>

                <th>Units Sold</th>

                <th>Overall DW</th>

                <th>Brand DW</th>

                <th>Cumulative DW</th>

                <th>Badges</th>

                <th>Actions</th>

            </tr>

        </thead>

        <tbody id="diTableBody">

            <tr>

                <td colspan="13" class="di-table-empty">

                    Demand Index will appear here.

                </td>

            </tr>

        </tbody>

    </table>

</div>

`;

}