/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Intelligence Header
 * Version : V1.1
 * =====================================================
 */

export async function renderHeader(

    target

){

    target.innerHTML=`

<div class="di-header">

    <div class="di-header-left">

        <h1>

            SJIT Intelligence

        </h1>

        <p>

            FC-wise Stock, Sales & Regional Performance.

        </p>

    </div>

    <div class="di-header-right">

        <button

            id="sjitExportButton"

            class="di-primary-btn"

        >

            ⬇ Export

        </button>

    </div>

</div>

`;

    bindEvents();

}

/**
 * =====================================================
 * Events
 * =====================================================
 */

function bindEvents(){

    const button=

        document.getElementById(

            "sjitExportButton"

        );

    if(

        !button

    ){

        return;

    }

    button.onclick=()=>{

        console.log(

            "SJIT Export"

        );

        // Export service will be wired
        // after integration.

    };

}