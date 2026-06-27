/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Version : 0.3.0
 * Module : Bootstrap
 * =====================================================
 */

import { initializeData } from "../services/dataService.js";
import { startApp } from "./startup.js";

document.addEventListener("DOMContentLoaded", async () => {

    console.clear();

    console.log("🔥 Project Phoenix");

    try {

        console.log("⚡ Initializing Data Engine...");

        await initializeData();

        console.log("✅ Data Engine Ready");

        await startApp();

        console.log("🚀 Phoenix Ready");

    } catch (error) {

        console.error("❌ Startup Failed", error);

    }

});