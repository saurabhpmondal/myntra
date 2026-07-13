/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : RTO Metrics
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build RTO Metrics
 * =====================================================
 */

export function buildRTOMetrics(

    rows=[]

){

    return rows.reduce(

        (

            metrics,

            row

        )=>{

            if(

                !row.isRTO

            ){

                return metrics;

            }

            metrics.units+=

                1;

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