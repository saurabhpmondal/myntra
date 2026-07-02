/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Open Style Controller
 * Version : V1.0
 * =====================================================
 */

import { buildStyleContext } from "../../../services/styleEye/styleContextBuilder.js";

import { renderDashboardSections } from "./sectionRenderer.js";

/**
 * =====================================================
 * Open Style
 * =====================================================
 */

export async function openStyle(

    target,

    styleId

){

    const context =

        buildStyleContext(

            styleId

        );

    if(!context){

        alert(

            "Unable to build Style Context."

        );

        return;

    }

    target.innerHTML="";

    await renderDashboardSections(

        target,

        context,

        async selectedStyleId=>{

            if(

                selectedStyleId===

                context.identity.styleId

            ){

                return;

            }

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

            await openStyle(

                target,

                selectedStyleId

            );

        }

    );

}