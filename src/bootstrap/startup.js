/**
 * =====================================================
 * Project Phoenix
 * =====================================================
 */

import { showSplash } from "../splash/splash.js";

export function startApp(){

    showSplash();

    animate();

}

function animate(){

    const bar=document.getElementById("progressBar");

    const text=document.getElementById("progressText");

    const steps=[

        "Loading Theme...",

        "Loading Components...",

        "Preparing Dashboard...",

        "Launching Phoenix..."

    ];

    let i=0;

    const timer=setInterval(()=>{

        bar.style.width=((i+1)*25)+"%";

        text.textContent=steps[i];

        i++;

        if(i===steps.length){

            clearInterval(timer);

        }

    },500);

}