/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sidebar Menu
 * Author  : Saurabh Mondal & Magical CTO
 * =====================================================
 */

import { Navigation } from "../../config/navigation.js";

export function buildMenu() {

    const menu = document.querySelector(".sidebar-menu");

    menu.innerHTML = "";

    Navigation.forEach((page, index) => {

        const item = document.createElement("button");

        item.className = "sidebar-item";

        if (index === 0) {
            item.classList.add("active");
        }

        item.dataset.page = page.id;

        item.innerHTML = `
            <span class="sidebar-icon">${page.icon}</span>
            <span>${page.title}</span>
        `;

        menu.appendChild(item);

    });

}