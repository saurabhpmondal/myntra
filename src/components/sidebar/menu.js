/**
 * =====================================================
 * Project Phoenix
 * Sidebar Menu
 * =====================================================
 */

import { Navigation } from "../../config/navigation.js";
import { renderIcons } from "../../utils/icons.js";

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

            <i data-lucide="${page.icon}"></i>

            <span>${page.title}</span>

        `;

        menu.appendChild(item);

    });

    renderIcons();

}