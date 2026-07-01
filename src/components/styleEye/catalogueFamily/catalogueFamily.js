/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Catalogue Family
 * Version : V1.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

import { buildCatalogueFamily } from "../../../services/styleEye/catalogueFamilyService.js";

import { formatNumber } from "../../../utils/formatter.js";

export async function renderCatalogueFamily(

    target,

    context,

    onStyleSelect

){

    await createComponent({

        target,

        html:"src/components/styleEye/catalogueFamily/catalogueFamily.html",

        css:"src/components/styleEye/catalogueFamily/catalogueFamily.css"

    });

    const family =

        buildCatalogueFamily(context);

    renderSummary(

        target,

        family.catalogue

    );

    renderCarousel(

        target,

        family.family,

        onStyleSelect

    );

}

/**
 * ==========================================
 * Summary
 * ==========================================
 */

function renderSummary(

    target,

    catalogue

){

    const container =

        target.querySelector("#catalogueSummary");

    container.className =

        "catalogue-summary";

    container.innerHTML = `

<div class="catalogue-title">

    <div>

        <div class="catalogue-heading">

            ${catalogue.fallback ? "⭐ Best Selling Styles" : "📦 Catalogue Family"}

        </div>

        <div class="catalogue-subtitle">

            ${catalogue.fallback
                ? "No family found. Showing the best performing styles."
                : `Catalogue : <span class="catalogue-id">${catalogue.id}</span>`}

        </div>

    </div>

</div>

<div class="catalogue-kpi-grid">

    <div class="catalogue-kpi">

        <div class="catalogue-kpi-value">

            ${catalogue.styleCount}

        </div>

        <div class="catalogue-kpi-label">

            Styles

        </div>

    </div>

    <div class="catalogue-kpi">

        <div class="catalogue-kpi-value">

            ${catalogue.active}

        </div>

        <div class="catalogue-kpi-label">

            Active

        </div>

    </div>

    <div class="catalogue-kpi">

        <div class="catalogue-kpi-value">

            ${catalogue.inactive}

        </div>

        <div class="catalogue-kpi-label">

            Inactive

        </div>

    </div>

    <div class="catalogue-kpi">

        <div class="catalogue-kpi-value">

            ${formatNumber(catalogue.totalSale)}

        </div>

        <div class="catalogue-kpi-label">

            90D Sales

        </div>

    </div>

    <div class="catalogue-kpi">

        <div class="catalogue-kpi-value">

            ⭐ ${catalogue.avgRating.toFixed(1)}

        </div>

        <div class="catalogue-kpi-label">

            Avg Rating

        </div>

    </div>

</div>

`;

}

/**
 * ==========================================
 * Carousel
 * ==========================================
 */

function renderCarousel(

    target,

    family,

    onStyleSelect

){

    const container =

        target.querySelector(

            "#catalogueCarousel"

        );

    container.innerHTML =

        family.map(style=>`

<div class="catalogue-tile ${style.isCurrent ? "catalogue-current" : ""}">

    <div class="catalogue-image">

        Image

    </div>

    <div class="catalogue-body">

        <div class="catalogue-rating">

            ⭐ ${style.rating.toFixed(1)}

        </div>

        <div class="catalogue-style">

            ${style.styleId}

        </div>

        <div class="catalogue-status">

            ${style.status}

        </div>

        <div class="catalogue-sales">

            <strong>

                ${formatNumber(style.sale90D)}

            </strong>

            Units Sold

        </div>

        <button

            class="catalogue-button"

            data-style="${style.styleId}"

        >

            View Style →

        </button>

    </div>

</div>

`).join("");

    container

        .querySelectorAll(

            ".catalogue-button"

        )

        .forEach(button=>{

            button.onclick=()=>{

                if(onStyleSelect){

                    onStyleSelect(

                        button.dataset.style

                    );

                }

            };

        });

}