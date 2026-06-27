/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Projection Summary
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { getProjectionSummary } from "../../../services/projectionSummaryService.js";

import {
    formatCompactCurrency,
    formatNumber
} from "../../../utils/formatter.js";

export async function renderProjectionSummary(target){

    await createComponent({

        target,

        html:"src/components/dailySales/projectionSummary/projectionSummary.html",

        css:"src/components/dailySales/projectionSummary/projectionSummary.css"

    });

    const summary = getProjectionSummary();

    renderTable(target, summary);

}

function renderTable(target, summary){

    const head = target.querySelector(".projection-head");

    const body = target.querySelector(".projection-body");

    head.innerHTML = "";

    body.innerHTML = "";

    const brands = Object.keys(summary.brands).sort();

    // -------------------------
    // Header
    // -------------------------

    const header = document.createElement("tr");

    header.innerHTML = `
        <th>Month</th>
        <th>Total</th>
        <th>GMV</th>
        <th>PPMP</th>
        <th>SJIT</th>
        <th>SOR</th>
    `;

    brands.forEach(brand=>{

        const th = document.createElement("th");

        th.textContent = brand;

        header.appendChild(th);

    });

    head.appendChild(header);

    addRow(
        body,
        brands,
        "MTD",
        summary,
        "actual"
    );

    addRow(
        body,
        brands,
        "PDS",
        summary,
        "drr"
    );

    addRow(
        body,
        brands,
        "Projection",
        summary,
        "projected"
    );

    addPreviousRow(
        body,
        brands,
        summary
    );

}

function addRow(body, brands, label, summary, field){

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${label}</td>
        <td>${formatNumber(summary.total[field])}</td>
        <td>${formatCompactCurrency(summary.gmv[field])}</td>
        <td>${formatNumber(summary.ppmp[field])}</td>
        <td>${formatNumber(summary.sjit[field])}</td>
        <td>${formatNumber(summary.sor[field])}</td>
    `;

    brands.forEach(brand=>{

        const td = document.createElement("td");

        td.textContent = formatNumber(

            summary.brands[brand][field]

        );

        row.appendChild(td);

    });

    body.appendChild(row);

}

function addPreviousRow(body, brands, summary){

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>Previous</td>
        <td>${formatNumber(summary.previous.total)}</td>
        <td>${formatCompactCurrency(summary.previous.gmv)}</td>
        <td>${formatNumber(summary.previous.ppmp)}</td>
        <td>${formatNumber(summary.previous.sjit)}</td>
        <td>${formatNumber(summary.previous.sor)}</td>
    `;

    brands.forEach(brand=>{

        const td = document.createElement("td");

        td.textContent = formatNumber(

            summary.previous.brands[brand] || 0

        );

        row.appendChild(td);

    });

    body.appendChild(row);

}