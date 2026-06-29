/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Shipment Controls
 * Version : V5.1
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { generateShipment } from "../../services/shipment/shipmentService.js";

import { refreshShipmentReport } from "./shipmentReport.js";

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

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        async ()=>{

            button.disabled = true;

            button.textContent =

                "Generating...";

            const config = {

                saleDays:Number(

                    target.querySelector(

                        "#saleDays"

                    ).value

                ),

                targetCover:Number(

                    target.querySelector(

                        "#targetCover"

                    ).value

                ),

                recallTrigger:Number(

                    target.querySelector(

                        "#recallTrigger"

                    ).value

                )

            };

            console.table(config);

            generateShipment(

                config

            );

            await refreshShipmentReport();

            target.querySelector(

                "#shipmentActions"

            ).style.display="flex";

            button.disabled=false;

            button.textContent=

                "Generate Shipment";

        }

    );

}