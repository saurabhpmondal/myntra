/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales Return Store
 * Version : V12.0
 * =====================================================
 */

export const SalesReturnStore={

    /**
     * Status
     */

    loaded:false,

    loading:false,

    generatedOn:null,

    /**
     * Raw Data
     */

    sales:[],

    returns:[],

    /**
     * Global Filter Output
     */

    filteredSales:[],

    filteredReturns:[],

    /**
     * Lookup
     */

    orderLookup:{},

    /**
     * Dashboard
     */

    dashboard:{

        saleGMV:0,
        saleUnits:0,

        cancelGMV:0,
        cancelUnits:0,

        rtoGMV:0,
        rtoUnits:0,

        cxGMV:0,
        cxUnits:0,

        netGMV:0,
        netUnits:0

    },

    /**
     * Reports
     */

    reports:{

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    },

    /**
     * UI
     */

    ui:{

        lastRefresh:null

    }

};

export function resetSalesReturnStore(){

    SalesReturnStore.loaded=false;

    SalesReturnStore.loading=false;

    SalesReturnStore.generatedOn=null;

    SalesReturnStore.sales=[];

    SalesReturnStore.returns=[];

    SalesReturnStore.filteredSales=[];

    SalesReturnStore.filteredReturns=[];

    SalesReturnStore.orderLookup={};

    SalesReturnStore.dashboard={

        saleGMV:0,
        saleUnits:0,

        cancelGMV:0,
        cancelUnits:0,

        rtoGMV:0,
        rtoUnits:0,

        cxGMV:0,
        cxUnits:0,

        netGMV:0,
        netUnits:0

    };

    SalesReturnStore.reports={

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    };

    SalesReturnStore.ui.lastRefresh=null;

}