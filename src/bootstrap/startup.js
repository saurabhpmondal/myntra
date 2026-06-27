/**
 * =====================================================
 * Project Phoenix
 * File : startup.js
 * Version : 0.1.0
 * Purpose : Start Application
 * =====================================================
 */

import { buildLayout } from "../ui/layout/layout.js";
import { initializeRouter } from "../router/router.js";

export function startApp() {

    buildLayout();

    initializeRouter();

    console.log("✅ Phoenix Started");

}
