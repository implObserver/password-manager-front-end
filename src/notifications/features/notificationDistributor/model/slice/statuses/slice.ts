import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { addPair } from "@/services/passKeeper/entities/pair/model";

const statusesSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        addError: (state: Statuses, action: PayloadAction<ErrorType>) => {
            const errors = state.errors;
            errors.push(action.payload);
        },

        removeError: (state: Statuses, action: PayloadAction<ErrorType>) => {
            const errors = state.errors;
            const index = errors.findIndex(error => error.id === action.payload.id);
            errors.splice(index, 1);
        },
        removeAccess: (state: Statuses, action: PayloadAction<Access>) => {
            const accesses = state.accesses;
            const index = accesses.findIndex(access => access.id === action.payload.id);
            accesses.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        const setLoadingComplete = (state: Statuses, action: any) => {
            console.log('yes')
            console.log(action.payload)
            if (!action.payload.isError) {
                deleteErrorsDuplicate(state, action);
                deleteAccessesDuplicate(state, action);
                const access: Access = {
                    id: action.payload.id,
                    message: action.payload.message,
                    status: 200,
                }
                state.accesses.push(access);
            } else {
                const error: ErrorType = {
                    id: action.payload.id,
                    message: action.payload.data.message,
                    status: action.payload.data.status,
                }
                deleteErrorsDuplicate(state, action);
                deleteAccessesDuplicate(state, action);
                state.errors.push(error);
            }
        };

        const deleteErrorsDuplicate = (state: Statuses, action: any) => {
            const errors = state.errors;
            const index = errors.findIndex(error => error.id === action.payload.id);
            errors.splice(index, 1);
        }

        const deleteAccessesDuplicate = (state: Statuses, action: any) => {
            const accesses = state.accesses;
            const index = accesses.findIndex(access => access.id === action.payload.id);
            accesses.splice(index, 1);
        }

        const setErrorState = (state: Statuses, action: any) => {
            console.log('no')
            console.log(action.payload)
            if (action.payload.error) {
                deleteErrorsDuplicate(state, action);
                state.errors.push(action.payload.data);
            }
        };

        const asyncActions = [
            { action: addPair },
        ];

        asyncActions.forEach(({ action }) => {
            builder
                .addCase(action.fulfilled, setLoadingComplete)
                .addCase(action.rejected, setErrorState);
        });
    }
})
export const statusesActions = statusesSlice.actions;
export const statusesReducer = statusesSlice.reducer;