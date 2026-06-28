/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Report
 * Version : V1.2
 * =====================================================
 */

import { renderTable } from "../common/table/table.js";
import { getGrowthReport } from "../../services/growth/growthService.js";

export async function renderGrowth(target){

    const report = getGrowthReport();

    target.innerHTML = "";

    // =====================================
    // KPI CARDS
    // =====================================

    const kpiContainer = document.createElement("div");

    kpiContainer.className = "growth-kpi-grid";

    report.kpis.forEach(kpi=>{

        const card = document.createElement("div");

        card.className = `growth-kpi-card ${kpi.className}`;

        card.innerHTML = `

            <div class="growth-kpi-title">

                ${kpi.title}

            </div>

            <div class="growth-kpi-value">

                ${kpi.value}

            </div>

        `;

        kpiContainer.appendChild(card);

    });

    target.appendChild(kpiContainer);

    // =====================================
    // STYLE LINK
    // =====================================

    const columns = report.columns.map(col=>{

        if(col.key==="styleId"){

            return{

                ...col,

                renderer:(value,row)=>{

                    return `

                        <a

                            href="${row.styleLink}"

                            target="_blank"

                            class="phoenix-style-link"

                        >

                            ${value}

                        </a>

                    `;

                }

            };

        }

        if(col.key==="growth"){

            return{

                ...col,

                renderer:(value)=>{

                    if(value==="🟢 NEW"){

                        return `

                            <span class="growth-new-badge">

                                🟢 NEW

                            </span>

                        `;

                    }

                    return `${Number(value).toFixed(2)}%`;

                }

            };

        }

        if(col.key==="rating"){

            return{

                ...col,

                renderer:(value)=>

                    Number(value||0).toFixed(1)

            };

        }

        if(col.key==="drr"){

            return{

                ...col,

                renderer:(value)=>

                    Number(value||0).toFixed(2)

            };

        }

        return col;

    });

    await renderTable({

        target,

        title:"Growth Report",

        subtitle:"Style Wise Day Wise Sales Performance",

        columns,

        rows:report.rows

    });

}