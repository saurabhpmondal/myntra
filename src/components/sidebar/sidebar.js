import { Assets } from "../../config/assets.js";

export function renderSidebar(target){

target.innerHTML=`

<aside class="sidebar">

<div class="sidebar-header">

<img
class="sidebar-logo"
src="${Assets.logo}">

<div class="sidebar-app">

Myntra Analytics

</div>

<div class="sidebar-tag">

Fashion Data Intelligence

</div>

</div>

<div class="sidebar-menu">

<div class="sidebar-item active">

📊 Dashboard

</div>

<div class="sidebar-item">

📈 Daily Sales

</div>

<div class="sidebar-item">

💼 Business

</div>

<div class="sidebar-item">

📦 Growth

</div>

<div class="sidebar-item">

🚚 Shipment

</div>

<div class="sidebar-item">

🔥 Surge

</div>

<div class="sidebar-item">

📉 Sales Drop

</div>

<div class="sidebar-item">

🚀 New Launch

</div>

<div class="sidebar-item">

👁 Style Eye

</div>

<div class="sidebar-item">

📢 Ads

</div>

</div>

<div class="sidebar-footer">

<div class="sidebar-version">

Foundation v0.1.0

</div>

<div class="sidebar-made">

Made with ❤️ by Magical CTO

</div>

</div>

</aside>

`;

}