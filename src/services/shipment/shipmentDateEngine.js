/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Date Engine
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "../data/dataService.js";

const DAY_MS = 86400000;

let latestSaleDate = null;

function buildDate(row){

    const day = Number(row.date || 0);

    const month = Number(row.month || 0);

    const year = Number(row.year || 0);

    if(!day || !month || !year){

        return null;

    }

    return new Date(

        year,

        month - 1,

        day

    );

}

export function getLatestSaleDate(){

    if(latestSaleDate){

        return latestSaleDate;

    }

    let latest = null;

    DataStore.sales.forEach(row=>{

        const date = buildDate(row);

        if(!date){

            return;

        }

        if(

            latest===null ||

            date>latest

        ){

            latest=date;

        }

    });

    latestSaleDate = latest;

    return latestSaleDate;

}

export function filterSalesByDays(days){

    const latest = getLatestSaleDate();

    if(!latest){

        return [];

    }

    const minDate =

        new Date(

            latest.getTime()

            -

            ((Number(days)-1)*DAY_MS)

        );

    return DataStore.sales.filter(row=>{

        const date = buildDate(row);

        return(

            date &&

            date>=minDate &&

            date<=latest

        );

    });

}

export function filterReturnsByDays(days){

    const latest = getLatestSaleDate();

    if(!latest){

        return [];

    }

    const minDate =

        new Date(

            latest.getTime()

            -

            ((Number(days)-1)*DAY_MS)

        );

    return DataStore.returns.filter(row=>{

        const date = buildDate(row);

        return(

            date &&

            date>=minDate &&

            date<=latest

        );

    });

}