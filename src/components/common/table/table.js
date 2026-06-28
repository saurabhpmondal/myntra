/**
 * =====================================================
 * Project Phoenix
 * Product : Common Table Engine
 * Module  : Table Engine
 * Version : V2.0
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

        html:"src/components/common/table/table.html",

        css:"src/components/common/table/table.css",

        data:{
            title:config.title||"",
            subtitle:config.subtitle||""
        }

    });

    const table = config.target.querySelector(".dashboard-card");

    renderHeader(
        table,
        config.columns||[],
        config.groupHeaders||null
    );

    renderBody(
        table,
        config.rows||[],
        config.columns||[],
        config.rowClass,
        config.cellClass
    );

    table.querySelector(".table-info").textContent =
        `Showing ${config.rows.length} records`;

}

/* ===========================================
   Header
=========================================== */

function renderHeader(table,columns,groups){

    const head = table.querySelector(".table-head");

    head.innerHTML="";

    // Existing behaviour
    if(!groups || !groups.length){

        const tr=document.createElement("tr");

        columns.forEach(column=>{

            const th=document.createElement("th");

            th.textContent=column.label;

            th.classList.add(
                `text-${column.align||"center"}`
            );

            tr.appendChild(th);

        });

        head.appendChild(tr);

        return;

    }

    // Group header row

    const groupRow=document.createElement("tr");

    groups.forEach(group=>{

        const th=document.createElement("th");

        th.textContent=group.label;

        th.colSpan=group.span;

        th.className="group-header";

        groupRow.appendChild(th);

    });

    head.appendChild(groupRow);

    // Normal header row

    const columnRow=document.createElement("tr");

    columns.forEach(column=>{

        const th=document.createElement("th");

        th.textContent=column.label;

        th.classList.add(
            `text-${column.align||"center"}`
        );

        columnRow.appendChild(th);

    });

    head.appendChild(columnRow);

}

/* ===========================================
   Body
=========================================== */

function renderBody(
    table,
    rows,
    columns,
    rowClass,
    cellClass
){

    const body=table.querySelector(".table-body");

    body.innerHTML="";

    rows.forEach(record=>{

        const tr=document.createElement("tr");

        if(typeof rowClass==="function"){

            const cls=rowClass(record);

            if(cls){

                tr.classList.add(cls);

            }

        }

        columns.forEach(column=>{

            const td=document.createElement("td");

            td.classList.add(
                `text-${column.align||"center"}`
            );

            if(typeof cellClass==="function"){

                const cls=cellClass(record,column);

                if(cls){

                    td.classList.add(cls);

                }

            }

            let value=record[column.key];

            if(!column.renderer){

                switch(column.format){

                    case "currency":

                        value=formatCurrency(value);

                        break;

                    case "compactCurrency":

                        value=formatCompactCurrency(value);

                        break;

                    case "number":

                        value=formatNumber(value);

                        break;

                }

            }

            if(typeof column.renderer==="function"){

                td.innerHTML=column.renderer(
                    value,
                    record
                );

            }else{

                td.textContent=value??"-";

            }

            tr.appendChild(td);

        });

        body.appendChild(tr);

    });

}