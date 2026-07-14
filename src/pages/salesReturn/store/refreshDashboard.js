/**
 * =============================================
 * Always Refresh Global Filters
 * =============================================
 */

applyFilters();

/**
 * =============================================
 * Build Normalized Dataset
 * =============================================
 */

SalesReturnStore.normalizedRows =
    buildOrderLineDataset(
        SalesReturnStore.filteredSalesRows,
        SalesReturnStore.filteredReturnRows
    );

console.log("Sales (Filtered):",
    SalesReturnStore.filteredSalesRows.length);

console.log("Returns (Filtered):",
    SalesReturnStore.filteredReturnRows.length);

console.log("Normalized:",
    SalesReturnStore.normalizedRows.length);