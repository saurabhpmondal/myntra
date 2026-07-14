/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Build Order Lookup
 * Version : V12.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Lookup
 * =====================================================
 */

export function buildLookup(

    sales=[]

){

    const lookup={};

    for(

        const row of sales

    ){

        const orderId=

            String(

                row.order_line_id??""

            ).trim();

        if(

            !orderId

        ){

            continue;

        }

        lookup[orderId]={

            /**
             * Identity
             */

            orderLineId:orderId,

            styleId:

                row.style_id??"",

            brand:

                row.brand??"",

            poType:

                row.po_type??"",

            articleType:

                row.article_type??"",

            warehouse:

                row.warehouse_id??"",

            state:

                row.state??"",

            /**
             * Sale
             */

            units:Number(

                row.qty??0

            ),

            gmv:Number(

                row.final_amount??0

            ),

            sellerPrice:Number(

                row.seller_price??0

            ),

            /**
             * Period
             */

            date:

                row.date,

            month:

                row.month,

            year:

                row.year,

            /**
             * Status
             */

            orderStatus:

                row.order_status??""

        };

    }

    return lookup;

}