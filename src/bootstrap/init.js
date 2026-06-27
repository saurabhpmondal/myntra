/**
 * =====================================================
 * Project Phoenix
 * File : init.js
 * Version : 0.1.0
 * Purpose : Application Bootstrap
 * =====================================================
 */

import { startApp } from "./startup.js";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {

    console.clear();

    console.log("🔥 Project Phoenix");
    console.log("🚀 Initializing Myntra Analytics");

    startApp();

}
