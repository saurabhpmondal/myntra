/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Daily Sales Table
 * Version : V1.1
 * =====================================================
 */

import { renderTable } from "../../common/table/table.js";
import { getDailySales } from "../../../services/dailySalesService.js";
import { getLatestPeriod } from "../../../services/periodService.js";
import { DataStore } from "../../../services/dataService.js";

export async function renderDailySalesTable(target){

    const rows = getDailySales();

    const latest = getLatestPeriod(DataStore.sales);

    await renderTable({

        target,

        title:"Daily Sales",

        subtitle:"Current Month Performance",

        columns:[

            {

                key:"date",

                label:"Date",

                align:"center",

                renderer:value=>{

                    if(value==="TOTAL"){

                        return "<b>TOTAL</b>";

                    }

                    return formatDate(

                        value,

                        latest.month

                    );

                }

            },

            {

                key:"PPMP",

                label:"PPMP",

                align:"center",

                format:"number"

            },

            {

                key:"SJIT",

                label:"SJIT",

                align:"center",

                format:"number"

            },

            {

                key:"SOR",

                label:"SOR",

                align:"center",

                format:"number"

            },

            {

                key:"total",

                label:"Total",

                align:"center",

                format:"number"

            },

            {

                key:"gmv",

                label:"GMV",

                align:"center",

                format:"compactCurrency"

            }

        ],

        rows

    });

}

function formatDate(day,month){

    const months={

        JAN:"Jan",

        FEB:"Feb",

        MAR:"Mar",

        APR:"Apr",

        MAY:"May",

        JUNE:"Jun",

        JULY:"Jul",

        AUG:"Aug",

        SEP:"Sep",

        OCT:"Oct",

        NOV:"Nov",

        DEC:"Dec"

    };

    return `${String(day).padStart(2,"0")}-${months[String(month).toUpperCase()]}`;

}