/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales Return Store
 * Version : V2.0
 * =====================================================
 */

const DEFAULT_STATE = ()=>({

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

});

export const SalesReturnStore=

    DEFAULT_STATE();

/**
 * =====================================================
 * Reset Store
 * =====================================================
 */

export function resetSalesReturnStore(){

    Object.assign(

        SalesReturnStore,

        DEFAULT_STATE()

    );

}