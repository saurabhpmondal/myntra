/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Aggregate Engine
 * Version : V12.0
 * =====================================================
 */

export function aggregateEngine({

    sales=[],

    returns=[],

    lookup={},

    groupBy=null

}){

    const report={};

    /**
     * ==========================================
     * SALES
     * ==========================================
     */

    sales.forEach(row=>{

        const key=

            groupBy

            ?String(row[groupBy]??"Unknown")

            :"TOTAL";

        if(!report[key]){

            report[key]=createRow(key);

        }

        report[key].sale.units+=Number(row.qty||0);

        report[key].sale.gmv+=Number(row.final_amount||0);

        if(

            String(row.order_status).toUpperCase()==="F"

        ){

            report[key].cancel.units+=Number(row.qty||0);

            report[key].cancel.gmv+=Number(row.final_amount||0);

        }

    });

    /**
     * ==========================================
     * RETURNS
     * ==========================================
     */

    returns.forEach(row=>{

        const order=

            lookup[

                row.order_line_id

            ];

        if(!order){

            return;

        }

        const key=

            groupBy

            ?String(

                order[groupBy]??

                row[groupBy]??

                "Unknown"

            )

            :"TOTAL";

        if(!report[key]){

            report[key]=createRow(key);

        }

        const type=

            String(

                row.type||""

            )

            .toUpperCase();

        if(type==="RTO"){

            report[key].rto.units++;

            report[key].rto.gmv+=order.gmv;

        }

        if(type==="RETURN"){

            report[key].cx.units++;

            report[key].cx.gmv+=order.gmv;

        }

    });

    /**
     * ==========================================
     * NET
     * ==========================================
     */

    Object.values(report).forEach(item=>{

        item.net.units=

            item.sale.units

            -

            item.cancel.units

            -

            item.rto.units

            -

            item.cx.units;

        item.net.gmv=

            item.sale.gmv

            -

            item.cancel.gmv

            -

            item.rto.gmv

            -

            item.cx.gmv;

    });

    return Object.values(report);

}

function createRow(key){

    return{

        key,

        sale:{units:0,gmv:0},

        cancel:{units:0,gmv:0},

        rto:{units:0,gmv:0},

        cx:{units:0,gmv:0},

        net:{units:0,gmv:0}

    };

}