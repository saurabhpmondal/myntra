/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sidebar
 * Author  : Saurabh Mondal & Magical CTO
 * =====================================================
 */

import { loadComponent } from "../../utils/loadComponent.js";
import { Assets } from "../../config/assets.js";
import { Version } from "../../config/version.js";
import { Navigation } from "../../config/navigation.js";

export async function renderSidebar(target) {

    await loadComponent(
        target,
        "src/components/sidebar/sidebar.html",
        {
            logo: Assets.logo,
            appName: Version.app,
            tagLine: "Fashion Data Intelligence",
            version: `${Version.release} • ${Version.version}`
        }
    );

    buildMenu();

}