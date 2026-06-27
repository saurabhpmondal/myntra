/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Daily Sales Table
 * Version : V1.2
 * =====================================================
 */

import { renderTable } from "../../common/table/table.js";
import { getDailySales } from "../../../services/dailySalesService.js";

export async function renderDailySalesTable(target){

    const rows = getDailySales();

    await renderTable({

        target,

        title:"Daily Sales",

        subtitle:"Current Month Performance",

        columns:[

            {

                key:"date",

                label:"Date",

                align:"center",

                renderer:(value,row)=>{

                    if(value==="TOTAL"){

                        return "<b>TOTAL</b>";

                    }

                    return formatDate(

                        value,

                        row.month

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