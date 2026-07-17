/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Prepare Reports
 * Version : V13.4
 * =====================================================
 */

import { SalesReturnStore } from "../store/salesReturnStore.js";

import { buildPOTypeReport } from "../builders/buildPOTypeReport.js";
import { buildBrandReport } from "../builders/buildBrandReport.js";
import { buildStyleReport } from "../builders/buildStyleReport.js";
import { buildReturnReasonReport } from "../builders/buildReturnReasonReport.js";
import { buildTrendReport } from "../builders/buildTrendReport.js";

export async function prepareReports(){

    /**
     * ==========================================
     * PO Type
     * ==========================================
     */

    SalesReturnStore.reports.poType =

        buildPOTypeReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Brand
     * ==========================================
     */

    SalesReturnStore.reports.brand =

        buildBrandReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Style
     * ==========================================
     */

    SalesReturnStore.reports.style =

        buildStyleReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Return Reason
     * ==========================================
     */

    SalesReturnStore.reports.returnReason =

        buildReturnReasonReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

    /**
     * ==========================================
     * Monthly Trend
     * ==========================================
     */

    SalesReturnStore.reports.trend =

        buildTrendReport(

            SalesReturnStore.sales,

            SalesReturnStore.returns,

            SalesReturnStore.lookup

        );

}