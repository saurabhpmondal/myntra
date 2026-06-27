/**
 * =====================================================
 * Project Phoenix
 * Sidebar
 * =====================================================
 */

import { loadComponent } from "../../utils/loadComponent.js";

import { Assets } from "../../config/assets.js";

import { Version } from "../../config/version.js";

export async function renderSidebar(target){

    await loadComponent(

        target,

        "src/components/sidebar/sidebar.html",

        {

            logo:Assets.logo,

            appName:Version.app,

            tagLine:"Fashion Data Intelligence",

            version:Version.release+" • "+Version.version

        }

    );

}