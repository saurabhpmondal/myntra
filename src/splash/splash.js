import { Assets } from "../config/assets.js";
import { Version } from "../config/version.js";

export function showSplash() {

    const root = document.getElementById("root");

    root.innerHTML = `

    <div class="splash">

        <div class="splash-card">

            <img
                class="logo"
                src="${Assets.logo}"
                alt="Logo">

            <h1>${Version.app}</h1>

            <p class="subtitle">

                Fashion Data Intelligence

            </p>

            <div class="progress">

                <div
                    id="progress"
                    class="progress-fill"></div>

            </div>

            <p
                id="status">

                Preparing Workspace...

            </p>

            <small>

                ${Version.release}
                •
                ${Version.version}

            </small>

        </div>

    </div>

    `;

    animate();

}

function animate(){

    const progress=document.getElementById("progress");

    const status=document.getElementById("status");

    const steps=[

        "Loading Theme...",

        "Loading Components...",

        "Preparing Dashboard...",

        "Launching Phoenix..."

    ];

    let i=0;

    const timer=setInterval(()=>{

        progress.style.width=((i+1)*25)+"%";

        status.textContent=steps[i];

        i++;

        if(i===steps.length){

            clearInterval(timer);

        }

    },500);

}