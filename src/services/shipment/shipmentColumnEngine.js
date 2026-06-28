/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Column Engine
 * Version : V1.0
 * =====================================================
 */

export function getShipmentColumns(){

    return [

        {
            key:"styleId",
            label:"Style ID"
        },

        {
            key:"erpSku",
            label:"ERP SKU"
        },

        {
            key:"status",
            label:"ERP Status"
        },

        {
            key:"brand",
            label:"Brand"
        },

        {
            key:"launchDate",
            label:"Launch Date"
        },

        {
            key:"rating",
            label:"Rating",

            renderer:value=>

                Number(value||0).toFixed(1)

        },

        {
            key:"gross",
            label:"Gross"
        },

        {
            key:"returnPercentage",
            label:"Return %",

            renderer:value=>

                `${Number(value||0).toFixed(2)}%`

        },

        {
            key:"net",
            label:"Net"
        },

        {
            key:"drr",
            label:"DRR",

            renderer:value=>

                Number(value||0).toFixed(2)

        },

        {
            key:"stock",
            label:"Stock"
        },

        {
            key:"sc",
            label:"SC",

            renderer:value=>

                Number(value||0).toFixed(2)

        },

        {
            key:"projection",
            label:"Projection"
        },

        {
            key:"shipment",
            label:"Shipment"
        },

        {
            key:"recall",
            label:"Recall"
        },

        {
            key:"shipmentReason",
            label:"Shipment Reason"
        }

    ];

}