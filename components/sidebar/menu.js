/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sidebar Menu
 * Version : V2.0
 * =====================================================
 */

import { Navigation } from "../../config/navigation.js";
import { renderIcons } from "../../utils/icon.js";
import { openPage } from "../../app/pageManager.js";

export function buildMenu(){

    const menu = document.querySelector(".sidebar-menu");

    menu.innerHTML = "";

    Navigation.forEach((page,index)=>{

        const item = document.createElement("button");

        item.className = "sidebar-item";

        if(index===0){

            item.classList.add("active");

        }

        item.dataset.page = page.id;

        item.innerHTML = `

            <i data-lucide="${page.icon}"></i>

            <span>${page.title}</span>

        `;

        item.onclick = async ()=>{

            // Remove Active

            document
                .querySelectorAll(".sidebar-item")
                .forEach(button=>{

                    button.classList.remove("active");

                });

            item.classList.add("active");

            // Open Page

            await openPage(page.id);

        };

        menu.appendChild(item);

    });

    renderIcons();

}