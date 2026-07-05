/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : SJIT Intelligence
 * Version : V1.0
 * =====================================================
 */

import {

    initializeSJIT

}

from "./services/sjitIntelligenceService.js";

let pageContainer=null;

export async function renderSJITIntelligence(

    target

){

    pageContainer=

        target;

    await initializeSJIT(

        pageContainer

    );

}