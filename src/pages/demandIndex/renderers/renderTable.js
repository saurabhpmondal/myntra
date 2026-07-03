/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Demand Index Table
 * Version : V3.0
 * =====================================================
 */

import { renderTable as renderCommonTable }
from "../../../components/common/table/table.js";

import { getDemandIndexTableConfig }
from "../config/tableConfig.js";

import { openStyle }
from "../../../components/styleEye/search/openStyle.js";

/**
 * =====================================================
 * Render Table
 * =====================================================
 */

export async function renderTable(

    target,

    rows=[]

){

    const config=

        getDemandIndexTableConfig(

            target,

            rows

        );

    await renderCommonTable(

        config

    );

    bindEvents(

        target

    );

}

/**
 * =====================================================
 * Events
 * =====================================================
 */

function bindEvents(

    target

){

    target

        .querySelectorAll(

            ".di-eye-btn"

        )

        .forEach(

            button=>{

                button.onclick=

                async()=>{

                    const styleId=

                        button.dataset.style;

                    const app=

                        document.querySelector(

                            "#app"

                        );

                    if(

                        !app

                    ){

                        return;

                    }

                    await openStyle(

                        app,

                        styleId

                    );

                };

            }

        );

}