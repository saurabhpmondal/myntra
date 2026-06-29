/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Date Filter
 * Version : V5.0
 * =====================================================
 */

import { DataStore } from "../dataService.js";

export function getShipmentPeriod(saleDays){

    const sales = DataStore.sales || [];

    if(!sales.length){

        return{

            sales:[],

            returns:[]

        };

    }

    // ==========================================
    // Latest Sale Date
    // ==========================================

    const latestDate = sales.reduce(

        (latest,row)=>{

            const current = Number(row.date || 0);

            return current > latest

                ? current

                : latest;

        },

        0

    );

    const fromDate =

        latestDate -

        saleDays +

        1;

    // ==========================================
    // Sales
    // ==========================================

    const filteredSales =

        sales.filter(row=>{

            const date =

                Number(row.date || 0);

            return(

                date >= fromDate &&

                date <= latestDate

            );

        });

    // ==========================================
    // Returns
    // ==========================================

    const filteredReturns =

        DataStore.returns.filter(row=>{

            const date =

                Number(row.date || 0);

            return(

                date >= fromDate &&

                date <= latestDate

            );

        });

    return{

        sales:filteredSales,

        returns:filteredReturns

    };

}