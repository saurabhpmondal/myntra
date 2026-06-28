/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Live Count Service
 * Version : V1.1
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

    // =========================================
    // Available Snapshot Dates
    // =========================================

    const dates = [

        ...new Set(

            inventory.map(r=>r.snapshot_date)

        )

    ].sort((a,b)=>parseDate(a)-parseDate(b));

    const latestDate = dates.length

        ? dates[dates.length-1]

        : null;

    const reportDate = selectedDate || latestDate;

    if(!reportDate){

        return{

            columns:[],

            rows:[],

            previous:{}

        };

    }

    // =========================================
    // If selected snapshot not available
    // =========================================

    if(!dates.includes(reportDate)){

        return{

            columns:[],

            rows:[],

            previous:{}

        };

    }

    const previousDate =

        dates.indexOf(reportDate)>0

            ? dates[dates.indexOf(reportDate)-1]

            : null;

    const currentInventory = inventory.filter(

        r=>r.snapshot_date===reportDate

    );

    const previousInventory = previousDate

        ? inventory.filter(

            r=>r.snapshot_date===previousDate

        )

        : [];

    const currentStock={};

    currentInventory.forEach(r=>{

        currentStock[r.style_id]=(currentStock[r.style_id]||0)

            +Number(r.inventory_count||0);

    });

    const previousStock={};

    previousInventory.forEach(r=>{

        previousStock[r.style_id]=(previousStock[r.style_id]||0)

            +Number(r.inventory_count||0);

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

    const previous={

        total:0

    };

    brands.forEach(brand=>{

        const brandStyles = listings.filter(

            r=>r.brand===brand

        );

        let current=0;

        let last=0;

        const countedCurrent=new Set();

        const countedPrevious=new Set();

        brandStyles.forEach(style=>{

            const id=String(style.style_id);

            if(

                Number(currentStock[id]||0)>0 &&

                !countedCurrent.has(id)

            ){

                countedCurrent.add(id);

                current++;

            }

            if(

                Number(previousStock[id]||0)>0 &&

                !countedPrevious.has(id)

            ){

                countedPrevious.add(id);

                last++;

            }

        });

        row[brand]=current;

        previous[brand]=last;

        row.total+=current;

        previous.total+=last;

    });

    return{

        date:reportDate,

        previousDate,

        columns,

        rows:[row],

        previous

    };

}

function parseDate(value){

    if(!value){

        return new Date(0);

    }

    const [d,m,y]=value.split("-").map(Number);

    return new Date(y,m-1,d);

}