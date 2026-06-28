/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Report
 * Version : V1.3
 * =====================================================
 */

import { renderTable } from "../common/table/table.js";
import { getGrowthReport } from "../../services/growth/growthService.js";

export async function renderGrowth(target){

    const report = getGrowthReport();

    target.innerHTML = "";

    // =====================================
    // PAGE CONTAINER
    // =====================================

    const page = document.createElement("div");

    page.className = "growth-page";

    target.appendChild(page);

    // =====================================
    // KPI SECTION
    // =====================================

    const kpiContainer = document.createElement("div");

    kpiContainer.className = "growth-kpi-grid";

    page.appendChild(kpiContainer);

    if(Array.isArray(report.kpis)){

        report.kpis.forEach(kpi=>{

            const card=document.createElement("div");

            card.className=`growth-kpi-card ${kpi.className}`;

            card.innerHTML=`

                <div class="growth-kpi-title">

                    ${kpi.title}

                </div>

                <div class="growth-kpi-value">

                    ${kpi.value}

                </div>

            `;

            kpiContainer.appendChild(card);

        });

    }

    // =====================================
    // TABLE SECTION
    // =====================================

    const tableContainer=document.createElement("div");

    page.appendChild(tableContainer);

    const columns=report.columns.map(column=>{

        if(column.key==="styleId"){

            return{

                ...column,

                renderer:(value,row)=>`

                    <a
                        href="${row.styleLink}"
                        target="_blank"
                        class="phoenix-style-link"
                    >
                        ${value}
                    </a>

                `

            };

        }

        if(column.key==="growth"){

            return{

                ...column,

                renderer:(value)=>{

                    if(value==="🟢 NEW"){

                        return`

                            <span class="growth-new-badge">

                                🟢 NEW

                            </span>

                        `;

                    }

                    return `${Number(value).toFixed(2)}%`;

                }

            };

        }

        if(column.key==="rating"){

            return{

                ...column,

                renderer:(value)=>

                    Number(value||0).toFixed(1)

            };

        }

        if(column.key==="drr"){

            return{

                ...column,

                renderer:(value)=>

                    Number(value||0).toFixed(2)

            };

        }

        return column;

    });

    await renderTable({

        target:tableContainer,

        title:"Growth Report",

        subtitle:"Style Wise Day Wise Sales Performance",

        columns,

        rows:report.rows

    });

}