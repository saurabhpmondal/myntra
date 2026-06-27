/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module : Layout
 * Author : Saurabh Mondal & Magical CTO
 * =====================================================
 */

import { renderSidebar } from "../components/sidebar/sidebar.js";

export function renderLayout() {

    const root = document.getElementById("root");

    root.innerHTML = `

        <div class="app-shell">

            <div id="sidebar-container"></div>

            <div class="app-main">

                <header class="app-header">

                    Dashboard

                </header>

                <main class="app-content">

                    <h1>Welcome to Myntra Analytics</h1>

                    <p>

                        🚀 Project Phoenix has officially started.

                    </p>

                </main>

            </div>

        </div>

    `;

    renderSidebar(

        document.getElementById("sidebar-container")

    );

}