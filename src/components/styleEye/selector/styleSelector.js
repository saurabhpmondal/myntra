/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Style Selector
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

export async function renderStyleSelector(
    target,
    styles=[],
    onSelect=null
){

    await createComponent({

        target,

        html:"src/components/styleEye/selector/styleSelector.html",

        css:"src/components/styleEye/selector/styleSelector.css"

    });

    const container =

        target.querySelector(

            "#styleSelectorContainer"

        );

    container.innerHTML = `

<div class="style-selector-title">

Multiple Styles Found

</div>

<div class="style-selector-grid">

${styles.map(style=>`

<div class="style-selector-card">

<div class="style-selector-brand">

${style.brand}

</div>

<div class="style-selector-item">

<b>Style ID</b><br>

${style.styleId}

</div>

<div class="style-selector-item">

<b>ERP SKU</b><br>

${style.erpSku}

</div>

<div class="style-selector-item">

<b>Status</b><br>

${style.erpStatus}

</div>

<button

class="style-selector-button"

data-style="${style.styleId}"

>

Deep Dive

</button>

</div>

`).join("")}

</div>

`;

    container
    .querySelectorAll(
        ".style-selector-button"
    )
    .forEach(button=>{

        button.onclick=()=>{

            if(typeof onSelect==="function"){

                onSelect(

                    button.dataset.style

                );

            }

        };

    });

}