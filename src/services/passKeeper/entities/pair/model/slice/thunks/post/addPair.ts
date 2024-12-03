import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../../../../api";

export const addPair = createAsyncThunk(
    'services/add/pair/',
    async (pair: Pair, thunkAPI) => {
        try {
            const response = await PostService.addPair(pair);
            console.log(response)
            const result: EmulateResponse = {
                id: 'addPair',
                message: `Сервис ${pair.service} успешно добавлен`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'addPair',
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