/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sale Metrics
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Sale Metrics
 * =====================================================
 */

export function buildSaleMetrics(

    rows=[]

){

    return rows.reduce(

        (

            metrics,

            row

        )=>{

            metrics.units+=

                Number(

                    row.saleUnits||0

                );

            metrics.gmv+=

                Number(

                    row.saleGMV||0

                );

            return metrics;

        },

        {

            units:0,

            gmv:0

        }

    );

}