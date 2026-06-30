/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search
 * Version : V2.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { searchStyle } from "../../../services/styleEye/styleSearchService.js";

import { buildStyleContext } from "../../../services/styleEye/styleContextBuilder.js";

import { renderStyleSelector } from "../selector/styleSelector.js";

import { renderHeroPanel } from "../hero/heroPanel.js";

export async function renderStyleSearch(target){

    await createComponent({

        target,

        html:"src/components/styleEye/search/styleSearch.html",

        css:"src/components/styleEye/search/styleSearch.css"

    });

    bindEvents(target);

}

function bindEvents(target){

    const searchBox =

        target.querySelector("#styleEyeSearch");

    const button =

        target.querySelector("#deepDiveButton");

    button.onclick = async ()=>{

        const keyword =

            searchBox.value.trim();

        if(!keyword){

            searchBox.focus();

            return;

        }

        button.disabled = true;

        button.textContent = "Searching...";

        try{

            const result = searchStyle(keyword);

            switch(result.type){

                // =====================================
                // Single Style
                // =====================================

                case "STYLE":

                    await openStyle(

                        target,

                        result.results[0].styleId

                    );

                    break;

                // =====================================
                // Multiple Styles
                // =====================================

                case "MULTIPLE":

                    target.innerHTML="";

                    await renderStyleSelector(

                        target,

                        result.results,

                        async styleId=>{

                            await openStyle(

                                target,

                                styleId

                            );

                        }

                    );

                    break;

                // =====================================
                // No Match
                // =====================================

                case "NOT_FOUND":

                    alert(

                        "No matching Style ID or ERP SKU found."

                    );

                    break;

            }

        }

        catch(error){

            console.error(

                "Style Eye Search",

                error

            );

            alert(

                "Unable to load Style Eye."

            );

        }

        finally{

            button.disabled=false;

            button.textContent="🔍 Deep Dive";

        }

    };

    searchBox.addEventListener(

        "keydown",

        event=>{

            if(event.key==="Enter"){

                button.click();

            }

        }

    );

}

/**
 * =====================================================
 * Open Style
 * =====================================================
 */

async function openStyle(

    target,

    styleId

){

    const context =

        buildStyleContext(styleId);

    if(!context){

        alert(

            "Unable to build style context."

        );

        return;

    }

    target.innerHTML="";

    // -----------------------------------------
    // Hero Panel
    // -----------------------------------------

    const heroSection =

        document.createElement("div");

    heroSection.className =

        "dashboard-section";

    target.appendChild(

        heroSection

    );

    await renderHeroPanel(

        heroSection,

        context

    );

    // -----------------------------------------
    // Placeholder
    // -----------------------------------------

    const placeholder =

        document.createElement("div");

    placeholder.className =

        "dashboard-card";

    placeholder.style.padding="40px";

    placeholder.style.textAlign="center";

    placeholder.style.marginTop="24px";

    placeholder.innerHTML=`

<h2>

Overview Panel

</h2>

<p>

🚀 Coming in the next phase...

</p>

`;

    target.appendChild(

        placeholder

    );

}