/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Brand Channel Performance
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { getBrandChannelPerformance } from "../../../services/brandChannelPerformanceService.js";

import {
    formatNumber,
    formatCurrency
} from "../../../utils/formatter.js";

export async function renderBrandChannelPerformance(target){

    await createComponent({

        target,

        html:"src/components/dailySales/brandChannelPerformance/brandChannelPerformance.html",

        css:"src/components/dailySales/brandChannelPerformance/brandChannelPerformance.css"

    });

    const data = getBrandChannelPerformance();

    const head = target.querySelector(".brand-channel-head");

    const body = target.querySelector(".brand-channel-body");

    head.innerHTML = `
        <tr>
            <th>Brand</th>
            <th>PPMP</th>
            <th>SJIT</th>
            <th>SOR</th>
            <th>Total</th>
            <th>Share %</th>
            <th>ASP</th>
        </tr>
    `;

    body.innerHTML = "";

    data.forEach(row=>{

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${row.brand}</td>
            <td class="text-right">${formatNumber(row.PPMP)}</td>
            <td class="text-right">${formatNumber(row.SJIT)}</td>
            <td class="text-right">${formatNumber(row.SOR)}</td>
            <td class="text-right">${formatNumber(row.total)}</td>
            <td class="text-right">${row.share.toFixed(1)}%</td>
            <td class="text-right">${formatCurrency(row.asp)}</td>
        `;

        body.appendChild(tr);

    });

}