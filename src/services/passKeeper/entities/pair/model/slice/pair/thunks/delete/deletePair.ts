import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteService } from "../../../../../api";

export const deletePair = createAsyncThunk(
    'services/delete/pair/',
    async (pair: Pair, thunkAPI) => {
        try {
            const response = await DeleteService.deletePair(pair);
            const result: EmulateResponse = {
                id: 'deletePair',
                message: `Сервис ${pair.service} успешно удален`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'deletePair',
                message: `Произошла ошибка`,
                isError: true,
                data: {
                    status: error.status,
                    message: error.message,
                },
            }
            return result;
        }
    }
)