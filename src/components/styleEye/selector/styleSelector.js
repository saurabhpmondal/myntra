/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Premium Style Selector
 * Version : V3.0
 * =====================================================
 */

import { createComponent } from "../../../utils/createComponent.js";

/**
 * =====================================================
 * Render Style Selector
 * =====================================================
 */

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

    const subtitle =

        buildSubtitle(styles);

    document.getElementById(

        "selectorSubtitle"

    ).textContent = subtitle;

    document.getElementById(

        "selectorCount"

    ).textContent =

        `${styles.length} Result${styles.length>1?"s":""}`;

    const container =

        document.getElementById(

            "styleSelectorContainer"

        );

    container.innerHTML =

        styles.map(style=>

            renderCard(style)

        ).join("");

    bindButtons(

        container,

        onSelect

    );

}

/**
 * =====================================================
 * Subtitle
 * =====================================================
 */

function buildSubtitle(styles){

    if(!styles.length){

        return "No matching style found.";

    }

    const erpSku =

        styles[0].erpSku || "";

    if(styles.length===1){

        return

        `1 matching style found.`;

    }

    return

        `Multiple listings found for ERP SKU ${erpSku}. Select the required style to continue Style Eye analysis.`;

}

/**
 * =====================================================
 * Render Card
 * =====================================================
 */

function renderCard(style){

    return `

<div class="style-selector-card">

    <div class="style-selector-top">

        ${renderImage(style)}

        <div class="style-selector-content">

            <div class="style-selector-brand">

                <div>

                    <h3>

                        ${style.brand || "-"}

                    </h3>

                    <div class="style-selector-style-name">

                        ${style.styleName || "Saree"}

                    </div>

                </div>

                <div>

                    <div class="style-selector-status">

                        ${style.erpStatus || "-"}

                    </div>

                    <div class="${style.isActive ? "selector-active" : "selector-inactive"}">

                        ${style.badge}

                        ${style.overallStatus}

                    </div>

                </div>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Style ID

                </span>

                <span class="style-selector-value">

                    ${style.styleId}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    ERP SKU

                </span>

                <span class="style-selector-value">

                    ${style.erpSku}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Style Status

                </span>

                <span class="style-selector-value">

                    ${style.styleStatus || "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Listing Status

                </span>

                <span class="style-selector-value">

                    ${style.listingStatus || "-"}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Rating

                </span>

                <span class="style-selector-value">

                    ${renderRating(style.rating)}

                </span>

            </div>

            <div class="style-selector-row">

                <span class="style-selector-label">

                    Launch Age

                </span>

                <span class="style-selector-value">

                    ${style.launchAge}

                </span>

            </div>

        </div>

    </div>

    <div class="style-selector-divider"></div>

    ${renderKpis(style)}

    ${renderFooter(style)}

</div>

`;

}

/**
 * =====================================================
 * KPI Section
 * =====================================================
 */

function renderKpis(style){

    return `

<div class="style-selector-kpis">

    <div class="selector-kpi">

        <div class="selector-kpi-label">

            MRP

        </div>

        <div class="selector-kpi-value">

            ${formatCurrency(style.mrp)}

        </div>

    </div>

    <div class="selector-kpi">

        <div class="selector-kpi-label">

            TP

        </div>

        <div class="selector-kpi-value">

            ${formatCurrency(style.tp)}

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

`;

}

/**
 * =====================================================
 * Footer
 * =====================================================
 */

function renderFooter(style){

    return `

<div class="style-selector-footer">

    <button

        class="style-selector-button"

        data-style="${style.styleId}"

    >

        🔍 Deep Dive

    </button>

</div>

`;

}

/**
 * =====================================================
 * Image
 * =====================================================
 */

function renderImage(style){

    const image = style.imageUrl
        ? `<img
                src="${style.imageUrl}"
                alt="${style.styleId}"
                loading="lazy"
           >`
        : `<div class="style-selector-no-image">

                👗

                <span>

                    No Image

                </span>

           </div>`;

    return `

<div
    class="style-selector-image ${style.isActive ? "selector-image-active" : "selector-image-inactive"}"
    data-image="${style.imageUrl || ""}"
    data-style="${style.styleId}"
>

    ${image}

</div>

`;

}

/**
 * =====================================================
 * Rating
 * =====================================================
 */

function renderRating(rating){

    rating = Number(rating || 0);

    if(!rating){

        return "—";

    }

    return `

<span class="selector-rating">

⭐ ${rating.toFixed(1)}

</span>

`;

}

/**
 * =====================================================
 * Bind Images
 * =====================================================
 */

function bindImages(container){

    container

        .querySelectorAll(

            ".style-selector-image"

        )

        .forEach(image=>{

            image.onclick=()=>{

                const url =

                    image.dataset.image;

                if(!url){

                    return;

                }

                /*
                 * Phase 5
                 * Phoenix Image Viewer
                 */

                window.open(

                    url,

                    "_blank"

                );

            };

        });

}

