import { createAsyncThunk } from "@reduxjs/toolkit";
import { PutService } from "../../../../api";

export const editPair = createAsyncThunk(
    'services/edit/pair/',
    async (pair: Pair, thunkAPI) => {
        try {
            const response = await PutService.editPair(pair);
            const result: EmulateResponse = {
                id: 'editPair',
                message: `Сервис ${pair.service} успешно обновлен`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'editPair',
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