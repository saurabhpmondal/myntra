/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module : Startup
 * =====================================================
 */

import { showSplash } from "../splash/splash.js";
import { renderLayout } from "../app/layout.js";

export function startApp() {

    showSplash();

    setTimeout(() => {

        renderLayout();

    },2500);

}