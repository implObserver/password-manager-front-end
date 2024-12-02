import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const passwordsSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
})

export const passwordsActions = passwordsSlice.actions;
export const passwordsReducer = passwordsSlice.reducer;