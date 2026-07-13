/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Customer Return Metrics
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Build Customer Return Metrics
 * =====================================================
 */

export function buildCXReturnMetrics(

    rows=[]

){

    return rows.reduce(

        (

            metrics,

            row

        )=>{

            if(

                !row.isCXReturn

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