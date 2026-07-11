/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Header
 * Version : V1.0
 * =====================================================
 */

import {

    NewLaunchStore

}

from "../services/newLaunchStore.js";

export async function renderHeader(

    target,

    store=NewLaunchStore

){

    target.innerHTML=`

<div class="di-header">

    <div class="di-header-left">

        <h1>

            New Launch Intelligence

        </h1>

        <p>

            Track launch performance, identify winning styles and dead launches.

        </p>

    </div>

    <div class="di-header-right">

        <div class="launch-filter-row">

            <select

                id="nlLaunchWindow"

                class="di-select"

            >

                <option value="30">

                    Last 30 Days

                </option>

                <option value="45">

                    Last 45 Days

                </option>

                <option value="60">

                    Last 60 Days

                </option>

                <option value="90">

                    Last 90 Days

                </option>

            </select>

            <select

                id="nlBrand"

                class="di-select"

            >

                <option value="">

                    All Brands

                </option>

            </select>

            <select

                id="nlStatus"

                class="di-select"

            >

                <option value="">

                    All Status

                </option>

                <option value="🚀 Hot">

                    🚀 Hot

                </option>

                <option value="🟢 Good">

                    🟢 Good

                </option>

                <option value="🟡 Slow">

                    🟡 Slow

                </option>

                <option value="🔴 Dead">

                    🔴 Dead

                </option>

            </select>

            <input

                id="nlSearch"

                class="di-search"

                type="text"

                placeholder="Search Style ID"

            >

        </div>

        <div class="launch-header-info">

            <span

                class="launch-success"

            >

                Success Rate :

                <b>

                    ${Number(

                        store.kpis

                        ?.successRate||0

                    ).toFixed(1)}%

                </b>

            </span>

            <span

                class="launch-updated"

            >

                Last Updated :

                ${formatDate(

                    store.generatedOn

                )}

            </span>

        </div>

    </div>

</div>

`;

}

/**
 * =====================================================
 * Format Date
 * =====================================================
 */

function formatDate(

    date

){

    if(

        !date

    ){

        return "-";

    }

    return date.toLocaleString(

        "en-IN",

        {

            day:"2-digit",

            month:"short",

            year:"numeric",

            hour:"2-digit",

            minute:"2-digit"

        }

    );

}