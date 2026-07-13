/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Cancel Metrics
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Cancel Metrics
 * =====================================================
 */

export function buildCancelMetrics(

    rows=[]

){

    return rows.reduce(

        (

            metrics,

            row

        )=>{

            if(

                !row.isCancelled

            ){

                return metrics;

            }

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