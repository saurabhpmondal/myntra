/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Live Count Service
 * Version : V1.0
 * =====================================================
 */

import { DataStore } from "./dataService.js";

export function getLiveCount(selectedDate = null){

    const listings = DataStore.listings.filter(row=>

        String(row.article_type || "").toUpperCase()==="SAREES" &&

        String(row.style_status_description || "").toUpperCase()==="ACTIVE" &&

        String(row.listing_status_description || "").toUpperCase()==="ACTIVE"

    );

    const inventory = DataStore.inventory;

    const dates = [...new Set(

        inventory.map(r=>r.snapshot_date)

    )].sort();

    const latestDate = dates.at(-1);

    const reportDate = selectedDate || latestDate;

    const stock = inventory.filter(

        r=>r.snapshot_date===reportDate

    );

    if(stock.length===0){

        return{

            date:reportDate,

            previousDate:null,

            columns:[],

            rows:[]

        };

    }

    const previousDate = dates.length>1

        ? dates[dates.length-2]

        : null;

    const previousStock = previousDate

        ? inventory.filter(

            r=>r.snapshot_date===previousDate

        )

        : [];

    const stockMap={};

    stock.forEach(row=>{

        stockMap[row.style_id]=

            Number(row.inventory_count||0);

    });

    const previousMap={};

    previousStock.forEach(row=>{

        previousMap[row.style_id]=

            Number(row.inventory_count||0);

    });

    const brands=[

        ...new Set(

            listings.map(r=>r.brand)

        )

    ].sort();

    const columns=[

        {

            key:"date",

            label:"Date",

            align:"left"

        }

    ];

    brands.forEach(brand=>{

        columns.push({

            key:brand,

            label:brand,

            align:"center",

            format:"number"

        });

    });

    columns.push({

        key:"total",

        label:"Total Live",

        align:"center",

        format:"number"

    });

    const row={

        date:reportDate,

        total:0

    };

    brands.forEach(brand=>{

        const styles = listings.filter(

            r=>r.brand===brand

        );

        let count=0;

        styles.forEach(style=>{

            if(

                Number(

                    stockMap[style.style_id]||0

                )>0

            ){

                count++;

            }

        });

        row[brand]=count;

        row.total+=count;

    });

    const previousRow={

        date:previousDate,

        total:0

    };

    if(previousDate){

        brands.forEach(brand=>{

            const styles=listings.filter(

                r=>r.brand===brand

            );

            let count=0;

            styles.forEach(style=>{

                if(

                    Number(

                        previousMap[style.style_id]||0

                    )>0

                ){

                    count++;

                }

            });

            previousRow[brand]=count;

            previousRow.total+=count;

        });

    }

    return{

        date:reportDate,

        previousDate,

        columns,

        rows:[row],

        current:row,

        previous:previousRow

    };

}