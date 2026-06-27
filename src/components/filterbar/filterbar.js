import { createComponent } from "../../utils/createComponent.js";

export async function renderFilterBar(target){

    await createComponent({

        target,

        html:"src/components/filterbar/filterbar.html",

        css:"src/components/filterbar/filterbar.css"

    });

}