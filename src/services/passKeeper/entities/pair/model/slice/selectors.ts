import { createSelector } from '@reduxjs/toolkit';

export const selectPairs = (state: { pairs: PaginationPairs }) => state.pairs.pairs;
export const selectCurrentPage = (state: { pairs: PaginationPairs }) => state.pairs.currentPage;
export const selectItemsPerPage = (state: { pairs: PaginationPairs }) => state.pairs.itemsPerPage;

export const selectPaginatedPairs = createSelector(
    [selectPairs, selectCurrentPage, selectItemsPerPage],
    (pairs: Pair[], currentPage: number, itemsPerPage: number): Pair[] => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        console.log(currentPage)
        return pairs.slice(startIndex, startIndex + itemsPerPage);
    }
);