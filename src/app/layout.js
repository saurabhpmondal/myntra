/**
 * =====================================================
 * Project Phoenix
 * Layout
 * =====================================================
 */

import { renderSidebar } from "../components/sidebar/sidebar.js";
import { renderHeader } from "../components/header/header.js";

export async function renderLayout() {

    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="app-shell">

            <div id="sidebar"></div>

            <div class="app-main">

                <div id="header"></div>

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

}