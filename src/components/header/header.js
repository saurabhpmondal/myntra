import { loadComponent } from "../../utils/loadComponent.js";
import { renderIcons } from "../../utils/icon.js";

export async function renderHeader(target, title = "Dashboard") {

    await loadComponent(
        target,
        "src/components/header/header.html",
        {
            title
        }
    );

    document.getElementById("last-refresh").textContent =
        new Date().toLocaleString();

    renderIcons();

}