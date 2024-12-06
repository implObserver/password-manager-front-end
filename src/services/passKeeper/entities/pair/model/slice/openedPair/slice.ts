import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const openedPairSlice = createSlice({
    name: 'pair',
    initialState,
    reducers: {
        openPair: (state: Pair, action: PayloadAction<Pair>) => {
            console.log(action.payload)
            state.id = action.payload.id;
            state.service = action.payload.service;
            state.password = action.payload.password;
            state.isLocked = action.payload.isLocked;
        }
    },
    extraReducers: (builder) => {
    }
})

export const openedPairActions = openedPairSlice.actions;
export const openedPairReducer = openedPairSlice.reducer;