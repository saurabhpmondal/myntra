/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Weekly Launch Performance
 * Version : V1.0
 * =====================================================
 */

const MS_PER_DAY=86400000;

/**
 * =====================================================
 * Build Weekly Launch Report
 * =====================================================
 */

export function buildWeeklyLaunch(

    launchRows=[]

){

    const weekMap={};

    launchRows.forEach(

        row=>{

            const week=

                getLaunchWeek(

                    row.launchAge

                );

            if(

                !weekMap[week]

            ){

                weekMap[week]={

                    launchWeek:week,

                    launches:0,

                    soldStyles:0,

                    deadLaunches:0,

                    unitsSold:0,

                    revenue:0

                };

            }

            const bucket=

                weekMap[week];

            bucket.launches++;

            if(

                row.units>0

            ){

                bucket.soldStyles++;

            }

            else{

                bucket.deadLaunches++;

            }

            bucket.unitsSold+=

                Number(

                    row.units||0

                );

            bucket.revenue+=

                Number(

                    row.revenue||0

                );

        }

    );

    return Object.values(

        weekMap

    )

    .sort(

        (a,b)=>

            a.launchWeek-

            b.launchWeek

    )

    .map(

        row=>({

            ...row,

            successRate:

                row.launches

                ?

                (

                    row.soldStyles/

                    row.launches

                )*100

                :

                0

        })

    );

}

/**
 * =====================================================
 * Launch Week
 * =====================================================
 */

function getLaunchWeek(

    launchAge

){

    return Math.floor(

        launchAge/7

    )+1;

}