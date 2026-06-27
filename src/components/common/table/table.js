/**
 * =====================================================
 * Project Phoenix
 * Product : Common Table Engine
 * Module  : Table Engine
 * Version : V1.1
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import {
    formatCurrency,
    formatCompactCurrency,
    formatNumber
} from "../../../utils/formatter.js";

export async function renderTable(config){

    await createComponent({

        target: config.target,

        html: "src/components/common/table/table.html",

        css: "src/components/common/table/table.css",

        data: {

            title: config.title || "",

            subtitle: config.subtitle || ""

        }

    });

    renderHeader(config.columns);

    renderBody(

        config.rows || [],

        config.columns || []

    );

    document.getElementById("tableInfo").textContent =

        `Showing ${config.rows.length} records`;

}

function renderHeader(columns){

    const head = document.getElementById("tableHead");

    head.innerHTML = "";

    const tr = document.createElement("tr");

    columns.forEach(column=>{

        const th = document.createElement("th");

        th.textContent = column.label;

        th.classList.add(

    `text-${column.align || "center"}`
);


        tr.appendChild(th);

    });

    head.appendChild(tr);

}

function renderBody(rows,columns){

    const body = document.getElementById("tableBody");

    body.innerHTML = "";

    rows.forEach(record=>{

        const tr = document.createElement("tr");

        columns.forEach(column=>{

            const td = document.createElement("td");

            td.classList.add(

    `text-${column.align || "center"}`
);

            let value = record[column.key];

            // ----------------------------
            // Formatting
            // ----------------------------

            if(!column.renderer){

                switch(column.format){

                    case "currency":

                        value = formatCurrency(value);

                        break;

                    case "compactCurrency":

                        value = formatCompactCurrency(value);

                        break;

                    case "number":

                        value = formatNumber(value);

                        break;

                    default:

                        break;

                }

            }

            // ----------------------------
            // Custom Renderer
            // ----------------------------

            if(typeof column.renderer === "function"){

                td.innerHTML =

                    column.renderer(

                        value,

                        record

                    );

            }

            else{

                td.textContent =

                    value ?? "-";

            }

            tr.appendChild(td);

        });

        body.appendChild(tr);

    });

}