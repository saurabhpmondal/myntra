/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Premium Style Selector
 * Version : V2.1
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

export async function renderStyleSelector(
    target,
    styles = [],
    onSelect = null
){

    await createComponent({

        target,

        html:"src/components/styleEye/selector/styleSelector.html",

        css:"src/components/styleEye/selector/styleSelector.css"

    });

    document.getElementById("selectorSubtitle").textContent =

        `${styles.length} style${styles.length>1?"s":""} found. Select one to continue with Deep Dive.`;

    document.getElementById("selectorCount").textContent =

        `${styles.length} Result${styles.length>1?"s":""}`;

    const container =

        document.getElementById(

            "styleSelectorContainer"

        );

    container.innerHTML = styles.map(style=>`

<div class="style-selector-card">

    <div class="style-selector-top">

        <div class="style-selector-image">

            Image Coming Soon

        </div>

        <div class="style-selector-content">

            <div class="style-selector-brand">

                <h3>

                    ${style.brand || "-"}

                </h3>

                <div class="style-selector-status">

                    ${style.erpStatus || "-"}

                </div>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Style ID

                </span>

                <span class="style-selector-value">

                    ${style.styleId || "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    ERP SKU

                </span>

                <span class="style-selector-value">

                    ${style.erpSku || "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Launch Date

                </span>

                <span class="style-selector-value">

                    ${style.launchDate || "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Launch Age

                </span>

                <span class="style-selector-value">

                    ${style.launchAge ?? "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Rating

                </span>

                <span class="style-selector-value">

                    ⭐ ${style.rating ?? "-"}

                </span>

            </div>

        </div>

    </div>

    <div class="style-selector-divider"></div>

    <div class="style-selector-kpis">

        <div class="selector-kpi">

            <div class="selector-kpi-label">

                MRP

            </div>

            <div class="selector-kpi-value">

                ${style.mrp || "-"}

            </div>

        </div>

        <div class="selector-kpi">

            <div class="selector-kpi-label">

                TP

            </div>

            <div class="selector-kpi-value">

                ${style.tp || "-"}

            </div>

        </div>

        <div class="selector-kpi">

            <div class="selector-kpi-label">

                Category

            </div>

            <div class="selector-kpi-value">

                ${style.category || "-"}

            </div>

        </div>

        <div class="selector-kpi">

            <div class="selector-kpi-label">

                Brand

            </div>

            <div class="selector-kpi-value">

                ${style.brand || "-"}

            </div>

        </div>

    </div>

    <div class="style-selector-footer">

        <button
            class="style-selector-button"
            data-style="${style.styleId}">

            Deep Dive →

        </button>

    </div>

</div>

`).join("");

    container
        .querySelectorAll(".style-selector-button")
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