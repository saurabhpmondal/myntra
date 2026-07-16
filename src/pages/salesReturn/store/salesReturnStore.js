/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Sales Return Store
 * Version : V13.3
 * =====================================================
 */

export const SalesReturnStore={

    /**
     * ==========================================
     * Status
     * ==========================================
     */

    loaded:false,

    loading:false,

    generatedOn:null,

    /**
     * ==========================================
     * Filtered Dataset
     * ==========================================
     */

    sales:[],

    returns:[],

    /**
     * ==========================================
     * Lookup
     * ==========================================
     */

    lookup:{},

    /**
     * ==========================================
     * Current Period KPI
     * ==========================================
     */

    currentDashboard:{

        sale:{units:0,gmv:0},

        cancel:{units:0,gmv:0},

        rto:{units:0,gmv:0},

        cx:{units:0,gmv:0},

        net:{units:0,gmv:0}

    },

    /**
     * ==========================================
     * Previous Period KPI
     * ==========================================
     */

    previousDashboard:{

        sale:{units:0,gmv:0},

        cancel:{units:0,gmv:0},

        rto:{units:0,gmv:0},

        cx:{units:0,gmv:0},

        net:{units:0,gmv:0}

    },

    /**
     * ==========================================
     * Dashboard
     * Growth Ready KPI
     * ==========================================
     */

    dashboard:{

        sale:{},

        cancel:{},

        rto:{},

        cx:{},

        net:{}

    },

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    reports:{

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    },

    /**
     * ==========================================
     * UI
     * ==========================================
     */

    ui:{

        lastRefresh:null

    }

};

/**
 * =====================================================
 * Reset Store
 * =====================================================
 */

export function resetSalesReturnStore(){

    SalesReturnStore.loaded=false;

    SalesReturnStore.loading=false;

    SalesReturnStore.generatedOn=null;

    SalesReturnStore.sales=[];

    SalesReturnStore.returns=[];

    SalesReturnStore.lookup={};

    /**
     * ==========================================
     * Current Dashboard
     * ==========================================
     */

    SalesReturnStore.currentDashboard={

        sale:{units:0,gmv:0},

        cancel:{units:0,gmv:0},

        rto:{units:0,gmv:0},

        cx:{units:0,gmv:0},

        net:{units:0,gmv:0}

    };

    /**
     * ==========================================
     * Previous Dashboard
     * ==========================================
     */

    SalesReturnStore.previousDashboard={

        sale:{units:0,gmv:0},

        cancel:{units:0,gmv:0},

        rto:{units:0,gmv:0},

        cx:{units:0,gmv:0},

        net:{units:0,gmv:0}

    };

    /**
     * ==========================================
     * Growth Dashboard
     * ==========================================
     */

    SalesReturnStore.dashboard={

        sale:{},

        cancel:{},

        rto:{},

        cx:{},

        net:{}

    };

    /**
     * ==========================================
     * Reports
     * ==========================================
     */

    SalesReturnStore.reports={

        poType:[],

        brand:[],

        style:[],

        returnReason:[],

        trend:[]

    };

    SalesReturnStore.ui.lastRefresh=null;

}