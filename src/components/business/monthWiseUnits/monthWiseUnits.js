/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Month Wise Units
 * Version : V1.0
 * =====================================================
 */

import { renderTable } from "../../common/table/table.js";

import { getMonthWiseUnits }
    from "../../../services/monthWiseUnitsService.js";

export async function renderMonthWiseUnits(target){

    const report = getMonthWiseUnits();

    await renderTable({

        target,

        title:"Month Wise Brand Sale (Units)",

        subtitle:"Last 6 Month Business Trend",

        columns:report.columns,

        rows:report.rows

    });

}