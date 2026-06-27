import { renderSidebar } from "../components/sidebar/sidebar.js";

export async function renderLayout(){

    const root=document.getElementById("root");

    root.innerHTML=`

    <div class="app-shell">

        <div id="sidebar"></div>

        <div class="app-main">

            <header id="header"></header>

            <main id="content"></main>

            <footer id="footer"></footer>

        </div>

    </div>

    `;

    await renderSidebar(

        document.getElementById("sidebar")

    );

}