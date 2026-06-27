/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module : Startup
 * =====================================================
 */

import { showSplash, hideSplash } from "../splash/splash.js";
import { renderLayout } from "../app/layout.js";

export async function startApp() {

    showSplash();

    await renderLayout();

    hideSplash();

}