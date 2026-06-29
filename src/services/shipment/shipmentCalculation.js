/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Calculation Engine
 * Version : V5.0
 * =====================================================
 */

export function calculateShipmentData(

    rows,

    config

){

    return rows.map(row=>{

        const gross =

            Number(row.gross || 0);

        const returns =

            Number(row.returns || 0);

        const stock =

            Number(row.stock || 0);

        const net =

            Math.max(

                0,

                gross - returns

            );

        const returnPercent =

            gross===0

            ?

            0

            :

            (returns/gross)*100;

        const drr =

            config.saleDays===0

            ?

            0

            :

            net/config.saleDays;

        const sc =

            drr===0

            ?

            0

            :

            stock/drr;

        const projection =

            (drr*config.targetCover)

            -

            stock;

        return{

            ...row,

            gross,

            returns,

            net,

            returnPercent,

            drr,

            sc,

            projection,

            shipment:0,

            recall:0,

            remark:""

        };

    });

}