/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sticky Search
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { searchStyle } from "../../../services/styleEye/styleSearchService.js";

export async function renderStickySearch(

    target,

    onStyleSelect

){

    await createComponent({

        target,

        html:"src/components/styleEye/stickySearch/stickySearch.html",

        css:"src/components/styleEye/stickySearch/stickySearch.css"

    });

    const searchBox =

        target.querySelector(

            "#stickyStyleSearch"

        );

    const button =

        target.querySelector(

            "#stickyDeepDiveButton"

        );

    button.onclick = async ()=>{

        const keyword =

            searchBox.value.trim();

        if(!keyword){

            searchBox.focus();

            return;

        }

        button.disabled = true;

        button.textContent =

            "Searching...";

        try{

            const result =

                searchStyle(

                    keyword

                );

            switch(result.type){

                case "STYLE":

                    if(onStyleSelect){

                        await onStyleSelect(

                            result.results[0].styleId

                        );

                    }

                    break;

                case "MULTIPLE":

                    alert(

                        "Multiple Style IDs found for this ERP SKU.\n\nPlease use the Home Search until Selector is integrated."

                    );

                    break;

                case "NOT_FOUND":

                    alert(

                        "No matching Style ID or ERP SKU found."

                    );

                    break;

            }

        }

        catch(error){

            console.error(

                error

            );

            alert(

                "Unable to search."

            );

        }

        finally{

            button.disabled = false;

            button.textContent =

                "🔍 Deep Dive";

        }

    };

    searchBox.addEventListener(

        "keydown",

        event=>{

            if(

                event.key==="Enter"

            ){

                button.click();

            }

        }

    );

}