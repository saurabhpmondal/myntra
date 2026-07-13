/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : Report Configuration
 * Version : V1.0
 * =====================================================
 */

export const REPORT_CONFIG={

    KPI:{

        TITLE:

            "Business Snapshot",

        SUBTITLE:

            "Current period compared with previous period."

    },

    PO_TYPE:{

        TITLE:

            "PO Type Performance",

        SUBTITLE:

            "Compare sales, returns and net performance across SJIT, PPMP and SOR."

    },

    BRAND:{

        TITLE:

            "Brand Performance",

        SUBTITLE:

            "Identify brands contributing maximum sales, returns and business loss."

    },

    STYLE:{

        TITLE:

            "Style Performance",

        SUBTITLE:

            "Analyze style level sales quality and actual business impact."

    },

    RETURN_REASON:{

        TITLE:

            "CX Return Reason Analysis",

        SUBTITLE:

            "Customer return reasons grouped from return sheet."

    },

    TREND:{

        TITLE:

            "Monthly Trend Analysis",

        SUBTITLE:

            "Track sales, returns and net business movement over time."

    }

};

/**
 * =====================================================
 * Report Sequence
 * =====================================================
 */

export const REPORT_SEQUENCE=[

    "PO_TYPE",

    "BRAND",

    "STYLE",

    "RETURN_REASON",

    "TREND"

];