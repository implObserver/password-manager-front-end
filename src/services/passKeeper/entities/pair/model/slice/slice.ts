import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { addPair } from "./thunks/post/addPair";
import { editPair } from "./thunks/put/editPair";
import { deletePair } from "./thunks/delete/deletePair";

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
                action.payload.data.message = 'Ошибка добавления сервиса'
            } else {
                const pairs = state.pairs;
                const newPair = action.payload.data.message as Pair;
                console.log(newPair)
                const index = pairs.findIndex(pair => pair.id === newPair.id);
                const index2 = pairs.findIndex(pair => pair.service === newPair.service);
                if (index === -1 && index2 === -1) {
                    pairs.push(newPair);
                } else {
                    action.payload.data.message = 'Сервис уже существует'
                    action.payload.data.status = 403;
                    action.payload.isError = true;
                }
            }
        };

        const updatePair = (state: PaginationPairs, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {
                action.payload.data.message = 'Ошибка обновления сервиса'
            } else {
                const pairs = state.pairs;
                const newPair = action.payload.data.message as Pair;
                const index = pairs.findIndex(pair => pair.id === newPair.id);

                if (index !== -1) {
                    pairs.splice(index, 1, newPair);
                } else {
                    action.payload.data.message = 'Несуществующий сервис'
                    action.payload.data.status = 403;
                    action.payload.isError = true;
                }
            }
        };

        const removePair = (state: PaginationPairs, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {
                action.payload.data.message = 'Ошибка удаления сервиса'
            } else {
                const pairs = state.pairs;
                const newPair = action.payload.data.message as Pair;
                const index = pairs.findIndex(pair => pair.id === newPair.id);
                console.log(action.payload.data.message)
                console.log(index)
                if (index !== -1) {
                    pairs.splice(index, 1);
                } else {
                    action.payload.data.message = 'Несуществующий сервис'
                    action.payload.data.status = 403;
                    action.payload.isError = true;
                }
            }
        }
        const asyncActions = [
            { action: addPair, handler: addNewPair },
            { action: editPair, handler: updatePair },
            { action: deletePair, handler: removePair },
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