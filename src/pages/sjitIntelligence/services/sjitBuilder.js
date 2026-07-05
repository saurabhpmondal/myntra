/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Builder
 * Version : V1.1
 * =====================================================
 */

import { DataStore }
from "../../../services/dataService.js";

import {
    WarehouseMap
}
from "../../../config/warehouseMap.js";

export function buildSJITData(){

    /**
     * ==========================================
     * SJIT Sales
     * ==========================================
     */

    const salesRows=

        (DataStore.sales || [])

        .filter(

            row=>

                String(

                    row.po_type || ""

                )

                .toUpperCase()

                ===

                "SJIT"

        );

    /**
     * ==========================================
     * SJIT Stock
     * ==========================================
     */

    const stockRows=

        DataStore.sjitStock || [];

    const warehouseMap={};

    /**
     * ==========================================
     * Build Stock
     * ==========================================
     */

    stockRows.forEach(

        row=>{

            const warehouseId=

                Number(

                    row.warehouse_id || 0

                );

            if(!warehouseId){

                return;

            }

            if(

                !warehouseMap[warehouseId]

            ){

                const warehouse=

                    WarehouseMap[warehouseId] || {};

                warehouseMap[warehouseId]={

                    warehouseId,

                    warehouseName:

                        warehouse.name ||

                        row.warehouse_name ||

                        "",

                    shortName:

                        warehouse.shortName ||

                        row.warehouse_name ||

                        "",

                    region:

                        warehouse.region ||

                        "Unknown",

                    stock:0,

                    soldQty:0,

                    gmv:0,

                    styles:new Set(),

                    states:new Set()

                };

            }

            warehouseMap[warehouseId].stock+=

                Number(

                    row.inventory_count || 0

                );

        }

    );

    /**
     * ==========================================
     * Build Sales
     * ==========================================
     */

    salesRows.forEach(

        row=>{

            const warehouseId=

                Number(

                    row.warehouse_id || 0

                );

            if(!warehouseId){

                return;

            }

            if(

                !warehouseMap[warehouseId]

            ){

                const warehouse=

                    WarehouseMap[warehouseId] || {};

                warehouseMap[warehouseId]={

                    warehouseId,

                    warehouseName:

                        warehouse.name ||

                        "",

                    shortName:

                        warehouse.shortName ||

                        "",

                    region:

                        warehouse.region ||

                        "Unknown",

                    stock:0,

                    soldQty:0,

                    gmv:0,

                    styles:new Set(),

                    states:new Set()

                };

            }

            warehouseMap[warehouseId].soldQty+=

                Number(

                    row.qty || 0

                );

            warehouseMap[warehouseId].gmv+=

                Number(

                    row.final_amount || 0

                );

            warehouseMap[warehouseId].styles.add(

                String(

                    row.style_id || ""

                )

            );

            warehouseMap[warehouseId].states.add(

                String(

                    row.state || ""

                )

            );

        }

    );

    /**
     * ==========================================
     * Normalize
     * ==========================================
     */

    const warehouseRows=

        Object.values(

            warehouseMap

        )

        .map(

            row=>({

                warehouseId:

                    row.warehouseId,

                warehouseName:

                    row.warehouseName,

                shortName:

                    row.shortName,

                region:

                    row.region,

                stock:

                    row.stock,

                soldQty:

                    row.soldQty,

                gmv:

                    row.gmv,

                styleCount:

                    row.styles.size,

                stateCount:

                    row.states.size

            })

        )

        .sort(

            (a,b)=>

                b.soldQty-

                a.soldQty

        );

    /**
     * ==========================================
     * Return
     * ==========================================
     */

    return{

        salesRows,

        warehouseRows

    };

}