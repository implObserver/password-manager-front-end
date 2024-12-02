import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {
        addPassword: (state: Pair[], action: PayloadAction<Pair>) => {
            const index = state.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                state.push(action.payload);
            }
        },
        removePassword: (state: Pair[], action: PayloadAction<Pair>) => {
            const index = state.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updatePassword: (state: Pair[], action: PayloadAction<Pair>) => {
            const index = state.findIndex(pair => pair.service === action.payload.service);
            if (index !== -1) {
                state.splice(index, 1, action.payload);
            }
        }
    },
    extraReducers: (builder) => { },
})

export const passwordsActions = passwordsSlice.actions;
export const passwordsReducer = passwordsSlice.reducer;