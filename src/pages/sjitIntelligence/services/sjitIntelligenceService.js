/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Intelligence Service
 * Version : V1.0
 * =====================================================
 */

import { renderLayout }
from "../renderers/renderLayout.js";

import { renderHeader }
from "../renderers/renderHeader.js";

import { renderKPIs }
from "../renderers/renderKPIs.js";

import { renderInsights }
from "../renderers/renderInsights.js";

import { renderMap }
from "../renderers/renderMap.js";

import { renderStockPie }
from "../renderers/renderStockPie.js";

import { renderFCReport }
from "../renderers/renderFCReport.js";

import { renderStateReport }
from "../renderers/renderStateReport.js";

import { renderRegionReport }
from "../renderers/renderRegionReport.js";

import { buildSJITData }
from "./sjitBuilder.js";

import { SJITStore }
from "./sjitStore.js";

import { buildKPIs }
from "../calculations/buildKPIs.js";

import { buildInsights }
from "../calculations/buildInsights.js";

import { buildFCReport }
from "../calculations/buildFCReport.js";

import { buildStateReport }
from "../calculations/buildStateReport.js";

import { buildRegionReport }
from "../calculations/buildRegionReport.js";

import { buildMapData }
from "../calculations/buildMapData.js";

export async function initializeSJIT(

    target

){

    await renderLayout(

        target

    );

    const warehouseRows=

        buildSJITData();

    const salesRows=

        warehouseRows.salesRows ||

        [];

    const fcRows=

        warehouseRows.warehouseRows ||

        warehouseRows;

    SJITStore.warehouseRows=

        fcRows;

    SJITStore.kpis=

        buildKPIs(

            fcRows,

            salesRows

        );

    SJITStore.fcReport=

        buildFCReport(

            fcRows

        );

    SJITStore.stateReport=

        buildStateReport(

            salesRows

        );

    SJITStore.regionReport=

        buildRegionReport(

            salesRows

        );

    SJITStore.mapData=

        buildMapData(

            salesRows

        );

    SJITStore.stockPie=

        SJITStore.fcReport;

    SJITStore.insights=

        buildInsights(

            SJITStore.fcReport,

            SJITStore.stateReport

        );

    await renderHeader(

        document.getElementById(

            "sjitHeader"

        )

    );

    await renderKPIs(

        document.getElementById(

            "sjitKPIs"

        ),

        SJITStore.kpis

    );

    await renderInsights(

        document.getElementById(

            "sjitInsights"

        ),

        SJITStore.insights

    );

    await renderMap(

        document.getElementById(

            "sjitMap"

        ),

        SJITStore.mapData

    );

    await renderStockPie(

        document.getElementById(

            "sjitPie"

        ),

        SJITStore.stockPie

    );

    await renderFCReport(

        document.getElementById(

            "sjitFCReport"

        ),

        SJITStore.fcReport

    );

    await renderStateReport(

        document.getElementById(

            "sjitStateReport"

        ),

        SJITStore.stateReport

    );

    await renderRegionReport(

        document.getElementById(

            "sjitRegionReport"

        ),

        SJITStore.regionReport

    );

}