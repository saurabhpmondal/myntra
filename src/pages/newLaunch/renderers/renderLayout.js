/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : New Launch Layout
 * Version : V1.0
 * =====================================================
 */

export async function renderLayout(

    target

){

    /**
     * ==========================================
     * Load CSS Once
     * ==========================================
     */

    if(

        !document.getElementById(

            "new-launch-css"

        )

    ){

        const link=

            document.createElement(

                "link"

            );

        link.id=

            "new-launch-css";

        link.rel=

            "stylesheet";

        link.href=

            "src/pages/newLaunch/newLaunch.css";

        document.head.appendChild(

            link

        );

    }

    target.innerHTML=`

<div class="new-launch-page">

    <section class="dashboard-section">

        <div id="newLaunchHeader"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchKPIs"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchInsights"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchPerformance"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchAgeAnalysis"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchWeekly"></div>

    </section>

    <section class="dashboard-section">

        <div id="newLaunchDead"></div>

    </section>

</div>

`;

}