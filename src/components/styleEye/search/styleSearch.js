/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Eye Search
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

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

    button.onclick = ()=>{

        const keyword =

            searchBox.value.trim();

        if(!keyword){

            searchBox.focus();

            return;

        }

        console.log(

            "Deep Dive :",keyword

        );

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