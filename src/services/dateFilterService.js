/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Date Filter Service
 * Version : V1.1
 * =====================================================
 */

function parseDate(value){

    if(value===null || value===undefined){

        return null;

    }

    // Handles:
    // 20260629
    // "20260629"
    // "2026-06-29"
    // Date object

    if(value instanceof Date){

        return new Date(

            value.getFullYear(),

            value.getMonth(),

            value.getDate()

        );

    }

    let text = String(value).trim();

    // yyyy-mm-dd

    if(text.includes("-")){

        const date = new Date(text);

        if(!isNaN(date)){

            return new Date(

                date.getFullYear(),

                date.getMonth(),

                date.getDate()

            );

        }

    }

    // yyyyMMdd

    text = text.replace(/\D/g,"");

    if(text.length!==8){

        return null;

    }

    const year = Number(

        text.substring(0,4)

    );

    const month = Number(

        text.substring(4,6)

    );

    const day = Number(

        text.substring(6,8)

    );

    return new Date(

        year,

        month-1,

        day

    );

}

export function getLatestDate(records){

    let latest = null;

    records.forEach(record=>{

        const date = parseDate(

            record.date

        );

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

    return latest;

}

export function filterByDays(

    records,

    days

){

    if(

        !Array.isArray(records) ||

        records.length===0

    ){

        return [];

    }

    const latestDate =

        getLatestDate(records);

    if(!latestDate){

        return [];

    }

    const startDate =

        new Date(latestDate);

    startDate.setHours(

        0,0,0,0

    );

    latestDate.setHours(

        23,59,59,999

    );

    startDate.setDate(

        startDate.getDate()

        -

        Number(days)

        +

        1

    );

    return records.filter(record=>{

        const date = parseDate(

            record.date

        );

        if(!date){

            return false;

        }

        return(

            date>=startDate &&

            date<=latestDate

        );

    });

}

export function getPeriodInfo(

    records,

    days

){

    const endDate =

        getLatestDate(records);

    if(!endDate){

        return null;

    }

    const startDate =

        new Date(endDate);

    startDate.setDate(

        startDate.getDate()

        -

        Number(days)

        +

        1

    );

    return{

        startDate,

        endDate

    };

}

export function formatDate(date){

    if(!date){

        return "";

    }

    return date.toLocaleDateString(

        "en-IN",

        {

            day:"2-digit",

            month:"short",

            year:"numeric"

        }

    );

}