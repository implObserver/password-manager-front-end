import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { addPair } from "./thunks/post/addPair";

const pairsSlice = createSlice({
    name: 'pairs',
    initialState,
    reducers: {
        addPair: (state: PaginationPairs, action: PayloadAction<Pair>) => {
            const pairs = state.pairs;
            const index = pairs.findIndex(pair => pair.service === action.payload.service);

            if (index == -1) {
                pairs.push(action.payload);
            }
        },
        removePair: (state: PaginationPairs, action: PayloadAction<Pair>) => {
            const pairs = state.pairs;
            const index = pairs.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                pairs.splice(index, 1);
            }
        },
        updatePair: (state: PaginationPairs, action: PayloadAction<Pair>) => {
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
    extraReducers: (builder) => {
        const pendingHandler = (state: PaginationPairs) => {

        };

        const errorHandler = (state: PaginationPairs) => {

        }

        const addNewPair = (state: PaginationPairs, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {
                const pairs = state.pairs;
                console.log('ошибка')
            } else {
                const pairs = state.pairs;
                const newPair = action.payload.data.message as Pair;
                const index = pairs.findIndex(pair => pair.service === newPair.service);

                if (index == -1) {
                    pairs.push(newPair);
                } else {
                    console.log('уже существует')
                }
            }
        };

        const asyncActions = [
            { action: addPair, handler: addNewPair },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, pendingHandler)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, errorHandler);
        });
    },
})

export const pairsActions = pairsSlice.actions;
export const pairsReducer = pairsSlice.reducer;