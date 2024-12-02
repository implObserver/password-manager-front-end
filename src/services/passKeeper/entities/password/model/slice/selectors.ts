import { createSelector } from '@reduxjs/toolkit';

export const selectPairs = (state: { passwords: PaginationPairs }) => state.passwords.pairs;
export const selectCurrentPage = (state: { passwords: PaginationPairs }) => state.passwords.currentPage;
export const selectItemsPerPage = (state: { passwords: PaginationPairs }) => state.passwords.itemsPerPage;

export const selectPaginatedPairs = createSelector(
    [selectPairs, selectCurrentPage, selectItemsPerPage],
    (pairs: Pair[], currentPage: number, itemsPerPage: number): Pair[] => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        console.log(currentPage)
        return pairs.slice(startIndex, startIndex + itemsPerPage);
    }
);