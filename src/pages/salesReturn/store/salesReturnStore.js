/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales & Return Store
 * Version : V2.0
 * =====================================================
 */

export const SalesReturnStore={

    /**
     * ==========================================
     * Raw Data
     * ==========================================
     */

    rawSales:[],

    rawReturns:[],

    /**
     * ==========================================
     * Normalized Data
     * ==========================================
     */

    orderLines:[],

    actualRows:[],

    attributedRows:[],

    filteredRows:[],

    /**
     * ==========================================
     * Dashboard
     * ==========================================
     */

    kpis:{},

    insights:[],

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    poTypeReport:[],

    brandReport:[],

    styleReport:[],

    returnReasonReport:[],

    trendReport:[],

    /**
     * ==========================================
     * Filters
     * ==========================================
     */

    filters:{

        periods:[],

        brands:[],

        poTypes:[],

        risks:[],

        search:""

    },

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    loaded:false,

    generatedOn:null

};

/**
 * =====================================================
 * Reset Store
 * =====================================================
 */

export function resetSalesReturnStore(){

    SalesReturnStore.rawSales=[];

    SalesReturnStore.rawReturns=[];

    SalesReturnStore.orderLines=[];

    SalesReturnStore.actualRows=[];

    SalesReturnStore.attributedRows=[];

    SalesReturnStore.filteredRows=[];

    SalesReturnStore.kpis={};

    SalesReturnStore.insights=[];

    SalesReturnStore.poTypeReport=[];

    SalesReturnStore.brandReport=[];

    SalesReturnStore.styleReport=[];

    SalesReturnStore.returnReasonReport=[];

    SalesReturnStore.trendReport=[];

    SalesReturnStore.filters={

        periods:[],

        brands:[],

        poTypes:[],

        risks:[],

        search:""

    };

    SalesReturnStore.loaded=false;

    SalesReturnStore.generatedOn=null;

}