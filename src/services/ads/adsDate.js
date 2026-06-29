/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Ads Date Engine
 * Version : V1.0
 * =====================================================
 */

export function buildSystemDate(row){

    if(row.system_date){

        return String(row.system_date);

    }

    const year=String(row.year).padStart(4,"0");

    const month=String(row.month).padStart(2,"0");

    const day=String(row.day).padStart(2,"0");

    return `${year}${month}${day}`;

}

export function getLatestAdsDate(rows){

    let latest="";

    rows.forEach(row=>{

        const date=buildSystemDate(row);

        if(date>latest){

            latest=date;

        }

    });

    return latest;

}

export function getDateDifference(start,end){

    const s=new Date(

        start.slice(0,4),

        Number(start.slice(4,6))-1,

        start.slice(6,8)

    );

    const e=new Date(

        end.slice(0,4),

        Number(end.slice(4,6))-1,

        end.slice(6,8)

    );

    return Math.floor(

        (e-s)/86400000

    );

}

export function filterAdsByDays(rows,days){

    const latest=getLatestAdsDate(rows);

    return rows.filter(row=>{

        const diff=getDateDifference(

            buildSystemDate(row),

            latest

        );

        return diff<days;

    });

}

export function formatDisplayDate(systemDate){

    const value=String(systemDate);

    return `${value.slice(6,8)}-${value.slice(4,6)}-${value.slice(0,4)}`;

}