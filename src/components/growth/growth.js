/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Report
 * Version : V1.1
 * =====================================================
 */

import { renderTable } from "../common/table/table.js";
import { getGrowthReport } from "../../services/growth/growthService.js";

export async function renderGrowth(target){

    const report = getGrowthReport();

    await renderTable({

        target,

        title: "Growth Report",

        subtitle: "Style Wise Day Wise Sales Performance",

        columns: report.columns,

        rows: report.rows,

        rowClass: () => "",

        cellClass: (row, column) => {

            // Growth %

            if(column.key === "growth"){

                return row.__growthClass || "";

            }

            // Projection

            if(column.key === "projection"){

                return row.__projectionClass || "";

            }

            // Day Wise

            if(column.key.startsWith("day_")){

                return row[`__${column.key}`] || "";

            }

            return "";

        },

        renderer: (value, column) => {

            if(column.key === "growth"){

                return `${Number(value || 0).toFixed(2)}%`;

            }

            if(column.key === "rating"){

                return Number(value || 0).toFixed(1);

            }

            if(column.key === "drr"){

                return Number(value || 0).toFixed(2);

            }

            return value;

        }

    });

}

