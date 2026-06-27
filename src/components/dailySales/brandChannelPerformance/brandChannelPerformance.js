/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Brand Channel Performance
 * Version : V2.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";
import { getBrandChannelPerformance } from "../../../services/brandChannelPerformanceService.js";
import { formatNumber } from "../../../utils/formatter.js";

export async function renderBrandChannelPerformance(target){

    await createComponent({

        target,

        html:"src/components/dailySales/brandChannelPerformance/brandChannelPerformance.html",

        css:"src/components/dailySales/brandChannelPerformance/brandChannelPerformance.css"

    });

    const table = getBrandChannelPerformance();

    const head = target.querySelector(".brand-channel-head");

    const body = target.querySelector(".brand-channel-body");

    head.innerHTML = `

        <tr>

            <th rowspan="2">Brand</th>

            <th colspan="2">Stock</th>

            <th colspan="4">Sales</th>

            <th colspan="3">Share %</th>

            <th colspan="3">DRR</th>

        </tr>

        <tr>

            <th>SOR</th>

            <th>SJIT</th>

            <th>SOR</th>

            <th>SJIT</th>

            <th>PPMP</th>

            <th>Total</th>

            <th>SOR</th>

            <th>SJIT</th>

            <th>PPMP</th>

            <th>SOR</th>

            <th>SJIT</th>

            <th>PPMP</th>

        </tr>

    `;

    body.innerHTML="";

    table.forEach(row=>{

        const tr=document.createElement("tr");

        tr.innerHTML=`

            <td>${row.brand}</td>

            <td>${formatNumber(row.stockSOR)}</td>

            <td>${formatNumber(row.stockSJIT)}</td>

            <td>${formatNumber(row.saleSOR)}</td>

            <td>${formatNumber(row.saleSJIT)}</td>

            <td>${formatNumber(row.salePPMP)}</td>

            <td>${formatNumber(row.totalSale)}</td>

            <td>${row.shareSOR.toFixed(1)}%</td>

            <td>${row.shareSJIT.toFixed(1)}%</td>

            <td>${row.sharePPMP.toFixed(1)}%</td>

            <td>${row.drrSOR.toFixed(2)}</td>

            <td>${row.drrSJIT.toFixed(2)}</td>

            <td>${row.drrPPMP.toFixed(2)}</td>

        `;

        body.appendChild(tr);

    });

}