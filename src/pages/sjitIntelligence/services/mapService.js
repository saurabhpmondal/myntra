/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : India Map Service
 * Version : V1.0
 * =====================================================
 */

let mapLoaded=false;

let loadingPromise=null;

/**
 * =====================================================
 * Register India Map
 * =====================================================
 */

export async function registerIndiaMap(){

    if(mapLoaded){

        return;

    }

    if(loadingPromise){

        return loadingPromise;

    }

    loadingPromise=loadMap();

    await loadingPromise;

}

async function loadMap(){

    const response=

        await fetch(

            "src/assets/maps/india.json"

        );

    if(

        !response.ok

    ){

        throw new Error(

            "Unable to load india.json"

        );

    }

    const india=

        await response.json();

    echarts.registerMap(

        "india",

        india

    );

    mapLoaded=true;

}