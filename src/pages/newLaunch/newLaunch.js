/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Intelligence
 * Version : V1.0
 * =====================================================
 */

import {

    initializeNewLaunch

}

from "./services/newLaunchService.js";

let pageContainer=null;

/**
 * =====================================================
 * Render
 * =====================================================
 */

export async function renderNewLaunch(

    target

){

    pageContainer=

        target;

    await initializeNewLaunch(

        pageContainer

    );

}

/**
 * =====================================================
 * Destroy
 * =====================================================
 */

export function destroyNewLaunch(){

    pageContainer=null;

}