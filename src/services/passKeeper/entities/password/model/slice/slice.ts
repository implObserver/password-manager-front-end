import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {
        addPassword: (state: PaginationPairs, action: PayloadAction<Pair>) => {
            const pairs = state.pairs;
            const index = pairs.findIndex(pair => pair.service === action.payload.service);

            if (index == -1) {
                pairs.push(action.payload);
            }
        },
        removePassword: (state: PaginationPairs, action: PayloadAction<Pair>) => {
            const pairs = state.pairs;
            const index = pairs.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                pairs.splice(index, 1);
            }
        },
        updatePassword: (state: PaginationPairs, action: PayloadAction<Pair>) => {
            const pairs = state.pairs;
            const index = pairs.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                pairs.splice(index, 1, action.payload);
            }
        },
        goToNextPage: (state: PaginationPairs) => {
            state.currentPage += 1;
        },
        goToPreviousPage: (state: PaginationPairs) => {
            state.currentPage -= 1;
        }
    },
    extraReducers: (builder) => { },
})

export const passwordsActions = passwordsSlice.actions;
export const passwordsReducer = passwordsSlice.reducer;