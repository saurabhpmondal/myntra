/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Growth Calculator
 * Version : V1.0
 * =====================================================
 */

/**
 * =====================================================
 * Calculate Growth
 * =====================================================
 */

export function calculateGrowth(

    current=0,

    previous=0

){

    current=

        Number(

            current||0

        );

    previous=

        Number(

            previous||0

        );

    if(

        previous===0

    ){

        return{

            value:

                current>0

                ?100

                :0,

            direction:

                current>0

                ?"up"

                :"flat",

            status:

                current>0

                ?"positive"

                :"neutral"

        };

    }

    const growth=

        (

            (

                current-

                previous

            )

            /

            previous

        )*100;

    return{

        value:

            Number(

                growth.toFixed(

                    1

                )

            ),

        direction:

            growth>0

            ?"up"

            :

            growth<0

            ?"down"

            :

            "flat",

        status:

            growth>0

            ?"positive"

            :

            growth<0

            ?"negative"

            :

            "neutral"

    };

}