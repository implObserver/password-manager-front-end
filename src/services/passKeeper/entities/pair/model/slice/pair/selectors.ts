import { createSelector } from '@reduxjs/toolkit';

export const selectPairs = (state: { pairs: PaginationPairs }) => state.pairs.pairs;
export const selectCurrentPage = (state: { pairs: PaginationPairs }) => state.pairs.currentPage;
export const selectItemsPerPage = (state: { pairs: PaginationPairs }) => state.pairs.itemsPerPage;