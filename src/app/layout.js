/**
 * =====================================================
 * Project Phoenix
 * File : layout.js
 * Version : 0.1.0
 * Purpose : Render Application Layout
 * =====================================================
 */

import { renderSidebar } from "../ui/sidebar/sidebar.js";
import { renderHeader } from "../ui/header/header.js";
import { renderFooter } from "../ui/footer/footer.js";

export function buildLayout() {

    renderSidebar();

    renderHeader();

    renderFooter();

}
