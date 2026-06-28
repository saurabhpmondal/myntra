/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Freshness Contribution
 * Version : V1.0
 * =====================================================
 */

import { renderTable } from "../../common/table/table.js";
import { getFreshnessContribution } from "../../../services/freshnessContributionService.js";

export async function renderFreshnessContribution(target){

    const report = getFreshnessContribution();

    await renderTable({

        target,

        title: "Freshness Contribution",

        subtitle: "Launch Age Wise Business Performance",

        columns: report.columns,

        rows: report.rows,

        rowClass: row =>

            row.band === "Grand Total"

                ? "table-total"

                : ""

    });

}