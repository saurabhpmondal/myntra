/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search
 * Version : V1.1
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { searchStyle } from "../../../services/styleEye/styleSearchService.js";

import { renderStyleSelector } from "../selector/styleSelector.js";

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

            console.log(result);

            switch(result.type){

                case "STYLE":

                    console.log(

                        "Selected Style",

                        result.results[0]

                    );

                    alert(

                        `Style Found\n\n${result.results[0].styleId}`

                    );

                    break;

                case "MULTIPLE":

                    target.innerHTML = "";

                    await renderStyleSelector(

                        target,

                        result.results,

                        styleId=>{

                            alert(

                                `Selected Style : ${styleId}`

                            );

                        }

                    );

                    break;

                case "NOT_FOUND":

                    alert(

                        "No matching Style ID or ERP SKU found."

                    );

                    break;

                default:

                    break;

            }

        }

        catch(error){

            console.error(

                "Style Search Failed",

                error

            );

            alert(

                "Unable to search style."

            );

        }

        finally{

            button.disabled = false;

            button.textContent = "🔍 Deep Dive";

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