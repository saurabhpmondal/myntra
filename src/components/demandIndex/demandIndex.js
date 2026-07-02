/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../utils/createComponent.js";

import { initializeDemandIndex } from "./services/demandIndexService.js";

export async function renderDemandIndex(target){

    await createComponent({

        target,

        html:"src/components/demandIndex/demandIndex.html",

        css:"src/components/demandIndex/demandIndex.css"

    });

    await initializeDemandIndex(target);

}