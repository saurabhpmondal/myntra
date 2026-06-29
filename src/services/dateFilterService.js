/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Date Filter Service
 * Version : V1.0
 * =====================================================
 */

function parseDate(value){

    if(!value){

        return null;

    }

    const text = String(value).trim();

    if(text.length !== 8){

        return null;

    }

    const year = Number(text.substring(0,4));

    const month = Number(text.substring(4,6));

    const day = Number(text.substring(6,8));

    return new Date(

        year,

        month-1,

        day

    );

}

function latestDate(records){

    let latest = null;

    records.forEach(record=>{

        const date = parseDate(record.date);

        if(!date){

            return;

        }

        if(!latest || date > latest){

            latest = date;

        }

    });

    return latest;

}

export function filterByDays(

    records,

    days

){

    if(!records?.length){

        return [];

    }

    const endDate = latestDate(records);

    if(!endDate){

        return [];

    }

    const startDate = new Date(endDate);

    startDate.setDate(

        startDate.getDate()

        -

        days

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

            date >= startDate &&

            date <= endDate

        );

    });

}

export function getLatestDate(records){

    return latestDate(records);

}