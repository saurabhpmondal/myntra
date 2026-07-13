/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales Return Store
 * Version : V2.1
 * =====================================================
 */

const INITIAL_STATE={

    loaded:false,

    loading:false,

    generatedOn:null,

    salesRows:[],

    returnRows:[],

    filteredSalesRows:[],

    filteredReturnRows:[],

    normalizedRows:[],

    actualRows:[],

    attributedRows:[],

    kpis:{},

    insights:[],

    poTypeReport:[],

    brandReport:[],

    styleReport:[],

    returnReasonReport:[],

    trendReport:[],

    filters:{

        saleMonth:[],

        brand:[],

        poType:[],

        risk:[],

        styleSearch:""

    },

    lookup:{

        months:[],

        brands:[],

        poTypes:[],

        risks:[

            "No Risk",

            "Low Risk",

            "Mid Risk",

            "High Risk"

        ]

    },

    ui:{

        initialized:false,

        activeTab:"dashboard",

        lastRefresh:null

    }

};

export const SalesReturnStore=

    structuredClone(

        INITIAL_STATE

    );

/**
 * =====================================================
 * Reset
 * Preserve raw loaded data
 * =====================================================
 */

export function resetSalesReturnStore(){

    const sales=

        SalesReturnStore.salesRows;

    const returns=

        SalesReturnStore.returnRows;

    Object.assign(

        SalesReturnStore,

        structuredClone(

            INITIAL_STATE

        )

    );

    SalesReturnStore.salesRows=

        sales;

    SalesReturnStore.returnRows=

        returns;

}