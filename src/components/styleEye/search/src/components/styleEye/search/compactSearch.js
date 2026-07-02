/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Compact Search
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { performSearch } from "./searchExecutor.js";

/**
 * =====================================================
 * Render Compact Search
 * =====================================================
 */

export async function renderCompactSearch(

    target,

    currentKeyword=""

){

    const wrapper =

        document.createElement("div");

    target.appendChild(

        wrapper

    );

    await createComponent({

        target:wrapper,

        html:"src/components/styleEye/search/styleSearch.html",

        css:"src/components/styleEye/search/styleSearch.css"

    });

    const container =

        wrapper.querySelector(

            ".style-eye-container"

        );

    container.classList.add(

        "compact"

    );

    const input =

        wrapper.querySelector(

            "#styleEyeSearch"

        );

    input.value =

        currentKeyword;

    const button =

        wrapper.querySelector(

            "#deepDiveButton"

        );

    button.onclick = async ()=>{

        await performSearch(

            target,

            input.value

        );

    };

    input.addEventListener(

        "keydown",

        event=>{

            if(event.key==="Enter"){

                button.click();

            }

        }

    );

}