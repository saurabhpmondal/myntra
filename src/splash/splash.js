import { Assets } from "../config/assets.js";
import { Version } from "../config/version.js";

export function showSplash() {

    const root = document.getElementById("root");

    root.innerHTML = `
    <div class="splash">

        <div class="splash-card">

            <img class="splash-logo"
                 src="${Assets.logo}"
                 alt="Logo">

            <h1>${Version.app}</h1>

            <p class="tagline">
                Fashion Data Intelligence
            </p>

            <div class="progress">

                <div id="progressBar"
                     class="progress-bar"></div>

            </div>

            <p id="progressText">

                Preparing Workspace...

            </p>

            <div class="footer">

                Version ${Version.version}
                •
                ${Version.release}

            </div>

        </div>

    </div>
    `;

}