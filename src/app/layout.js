/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module : Layout
 * =====================================================
 */

import { renderSidebar } from "../ui/sidebar/sidebar.js";
import { renderHeader } from "../ui/header/header.js";
import { renderFooter } from "../ui/footer/footer.js";

export function buildLayout() {

    renderSidebar();

    renderHeader();

    renderFooter();

    document.getElementById("content").innerHTML = `

        <div style="
            padding:60px;
            text-align:center;
        ">

            <img
                src="assets/logo/logo.jpeg"
                style="
                    width:180px;
                    margin-bottom:20px;
                ">

            <h1>Myntra Analytics</h1>

            <p>🔥 Project Phoenix</p>

            <br>

            <h3>Foundation v0.1.0</h3>

            <br>

            <p>Application Boot Successful</p>

        </div>

    `;

}