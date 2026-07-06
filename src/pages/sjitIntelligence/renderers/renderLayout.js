/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Layout
 * Version : V2.0
 * =====================================================
 */

import { createComponent }
from "../../../utils/createComponent.js";

export async function renderLayout(

    target

){

    await createComponent({

        target,

        html:

            "src/pages/sjitIntelligence/renderers/renderLayout.html",

        css:

            "src/pages/sjitIntelligence/sjitIntelligence.css"

    });

}