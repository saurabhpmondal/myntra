/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build PO Type Report
 * Version : V12.0
 * =====================================================
 */

export function buildPOTypeReport(
    dashboardRows
){

    const map = {};

    dashboardRows.forEach(row=>{

        const key = row.po_type || "-";

        if(!map[key]){

            map[key]={

                poType:key,

                saleGMV:0,
                saleUnits:0,

                cancelGMV:0,
                cancelUnits:0,

                rtoGMV:0,
                rtoUnits:0,

                cxGMV:0,
                cxUnits:0,

                netGMV:0,
                netUnits:0

            };

        }

        const item = map[key];

        item.saleGMV += row.saleGMV || 0;
        item.saleUnits += row.saleUnits || 0;

        item.cancelGMV += row.cancelGMV || 0;
        item.cancelUnits += row.cancelUnits || 0;

        item.rtoGMV += row.rtoGMV || 0;
        item.rtoUnits += row.rtoUnits || 0;

        item.cxGMV += row.cxGMV || 0;
        item.cxUnits += row.cxUnits || 0;

        item.netGMV += row.netGMV || 0;
        item.netUnits += row.netUnits || 0;

    });

    return Object.values(map)

        .sort((a,b)=>

            b.saleGMV-a.saleGMV

        );

}