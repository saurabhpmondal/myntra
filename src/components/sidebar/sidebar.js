/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module : Sidebar
 * Author : Saurabh Mondal & Magical CTO
 * =====================================================
 */

import { Assets } from "../../config/assets.js";

export function renderSidebar(target) {

    target.innerHTML = `

        <aside class="sidebar">

            <div class="sidebar-logo">

                <img src="${Assets.logo}" alt="Logo">

                <div class="sidebar-title">

                    <h2>Myntra Analytics</h2>

                    <span>Project Phoenix</span>

                </div>

            </div>

            <nav class="sidebar-menu">

                <a class="active">Dashboard</a>

                <a>Daily Sales</a>

                <a>Business</a>

                <a>Growth</a>

                <a>Shipment</a>

                <a>Surge</a>

                <a>Sales Drop</a>

                <a>New Launch</a>

                <a>Style Eye</a>

                <a>Ads</a>

            </nav>

            <div class="sidebar-footer">

                Foundation v0.1.0

            </div>

        </aside>

    `;

}