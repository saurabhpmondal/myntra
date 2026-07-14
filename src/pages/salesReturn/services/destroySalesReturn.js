/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Destroy
 * Version : V12.0
 * =====================================================
 */

export function destroySalesReturnPage(){

    const page =

        document.getElementById(

            "salesReturnPage"

        );

    if(

        page

    ){

        page.remove();

    }

}