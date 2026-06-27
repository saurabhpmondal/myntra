/**
 * =====================================================
 * Project Phoenix
 * Layout Engine
 * =====================================================
 */

import { renderSidebar } from "../components/sidebar/sidebar.js";
import { renderHeader } from "../components/header/header.js";
import { renderFilterBar } from "../components/filterbar/filterbar.js";
import { renderCommandPalette } from "../components/commandPalette/commandPalette.js";

export async function renderLayout() {

    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="app-shell">

            <div id="sidebar"></div>

            <div class="app-main">

                <div id="header"></div>

                <div id="filterbar"></div>

                <main id="content"></main>

                <footer id="footer"></footer>

            </div>

        </div>
    `;

    await renderSidebar(
        document.getElementById("sidebar")
    );

    await renderHeader(
        document.getElementById("header"),
        "Dashboard"
    );

    await renderFilterBar(
        document.getElementById("filterbar")
    );

}