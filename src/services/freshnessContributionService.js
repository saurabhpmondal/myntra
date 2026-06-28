/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Freshness Contribution Service
 * Version : V1.0
 * =====================================================
 */

import { getTrendSales } from "./filterService.js";
import { DataStore } from "./dataService.js";

const BANDS = [

    { label:"0-30", min:0, max:30 },
    { label:"31-60", min:31, max:60 },
    { label:"61-90", min:61, max:90 },
    { label:"91-120", min:91, max:120 },
    { label:"121-180", min:121, max:180 },
    { label:">180", min:181, max:99999 }

];

export function getFreshnessContribution(){

    const sales = getTrendSales();

    const brands = [

        ...new Set(

            sales.map(r=>r.brand || "Unknown")

        )

    ].sort();

    const columns=[

        {
            key:"band",
            label:"Launch Age",
            align:"left"
        },
        {
            key:"launchStyles",
            label:"Launch Styles",
            align:"center",
            format:"number"
        },
        {
            key:"soldStyles",
            label:"Sold Styles",
            align:"center",
            format:"number"
        },
        {
            key:"qty",
            label:"Sold Qty",
            align:"center",
            format:"number"
        },
        {
            key:"share",
            label:"Share %",
            align:"center",
            renderer:v=>v.toFixed(2)+"%"
        }

    ];

    brands.forEach(brand=>{

        columns.push({

            key:brand,

            label:brand,

            align:"center",

            renderer:v=>v.toFixed(2)+"%"

        });

    });

    const totalSale = sales.reduce(

        (t,r)=>t+Number(r.qty||0),

        0

    );

    const totalBrandSale={};

    brands.forEach(brand=>{

        totalBrandSale[brand]=sales

            .filter(r=>(r.brand||"Unknown")===brand)

            .reduce(

                (t,r)=>t+Number(r.qty||0),

                0

            );

    });

    const rows=[];

    BANDS.forEach(band=>{

        const styles = DataStore.productMaster.filter(product=>{

            const age = getLaunchAge(product);

            return age>=band.min && age<=band.max;

        });

        const styleIds = new Set(

            styles.map(r=>String(r.style_id))

        );

        const bandSales = sales.filter(r=>

            styleIds.has(String(r.style_id))

        );

        const row={

            band:band.label,

            launchStyles:styleIds.size,

            soldStyles:new Set(

                bandSales.map(r=>r.style_id)

            ).size,

            qty:bandSales.reduce(

                (t,r)=>t+Number(r.qty||0),

                0

            ),

            share:0

        };

        row.share=

            totalSale===0

                ?0

                :(row.qty/totalSale)*100;

        brands.forEach(brand=>{

            const qty = bandSales

                .filter(r=>

                    (r.brand||"Unknown")===brand

                )

                .reduce(

                    (t,r)=>t+Number(r.qty||0),

                    0

                );

            row[brand]=

                totalBrandSale[brand]===0

                    ?0

                    :(qty/totalBrandSale[brand])*100;

        });

        rows.push(row);

    });

    const grand={

        band:"Grand Total",

        launchStyles:DataStore.productMaster.length,

        soldStyles:new Set(

            sales.map(r=>r.style_id)

        ).size,

        qty:totalSale,

        share:100

    };

    brands.forEach(brand=>{

        grand[brand]=100;

    });

    rows.push(grand);

    return{

        columns,

        rows

    };

}

function getLaunchAge(product){

    const day = Number(product.date||1);

    const month = Number(product.month||1);

    const year = Number(product.year);

    if(!year){

        return 99999;

    }

    const launch = new Date(year,month-1,day);

    const today = new Date();

    return Math.floor(

        (today-launch)/86400000

    );

}