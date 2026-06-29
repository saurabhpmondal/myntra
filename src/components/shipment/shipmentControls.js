/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Controls
 * Version : V5.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

export async function renderShipmentControls(target){

    await createComponent({

        target,

        html:"src/components/shipment/shipmentControls.html",

        css:"src/components/shipment/shipmentControls.css"

    });

    bindEvents(target);

}

function bindEvents(target){

    const button =

        target.querySelector(

            "#generateShipment"

        );

    if(button){

        button.addEventListener(

            "click",

            ()=>{

                console.log(

                    "Generate Shipment"

                );

            }

        );

    }

}