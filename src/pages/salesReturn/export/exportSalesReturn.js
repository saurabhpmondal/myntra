/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Export Sales & Return
 * Version : V1.0
 * =====================================================
 */

import {

    SalesReturnStore

}

from "../store/salesReturnStore.js";

/**
 * =====================================================
 * Export Workbook
 * =====================================================
 */

export function exportSalesReturn(){

    const workbook=

        XLSX.utils.book_new();

    addSheet(

        workbook,

        "Dashboard",

        buildDashboard()

    );

    addSheet(

        workbook,

        "PO Type",

        SalesReturnStore.poTypeReport

    );

    addSheet(

        workbook,

        "Brand",

        SalesReturnStore.brandReport

    );

    addSheet(

        workbook,

        "Style",

        SalesReturnStore.styleReport

    );

    addSheet(

        workbook,

        "Return Reason",

        SalesReturnStore.returnReasonReport

    );

    addSheet(

        workbook,

        "Trend",

        SalesReturnStore.trendReport

    );

    XLSX.writeFile(

        workbook,

        "Sales_Return_Report.xlsx"

    );

}

/**
 * =====================================================
 * Dashboard Summary
 * =====================================================
 */

function buildDashboard(){

    const{

        kpis

    }=

    SalesReturnStore;

    return[

        buildRow(

            "Sale",

            kpis.sale

        ),

        buildRow(

            "Cancelled",

            kpis.cancel

        ),

        buildRow(

            "RTO",

            kpis.rto

        ),

        buildRow(

            "CX Return",

            kpis.cxReturn

        ),

        buildRow(

            "Net",

            kpis.net

        )

    ];

}

/**
 * =====================================================
 * KPI Row
 * =====================================================
 */

function buildRow(

    metric,

    data={}

){

    return{

        Metric:

            metric,

        Units:

            data?.units?.current||

            0,

        Previous_Units:

            data?.units?.previous||

            0,

        Units_Growth:

            data?.units?.growth?.value||

            0,

        GMV:

            data?.gmv?.current||

            0,

        Previous_GMV:

            data?.gmv?.previous||

            0,

        GMV_Growth:

            data?.gmv?.growth?.value||

            0

    };

}

/**
 * =====================================================
 * Add Sheet
 * =====================================================
 */

function addSheet(

    workbook,

    name,

    rows=[]

){

    const sheet=

        XLSX.utils.json_to_sheet(

            rows

        );

    XLSX.utils.book_append_sheet(

        workbook,

        sheet,

        name

    );

}