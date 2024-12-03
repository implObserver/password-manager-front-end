import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../../../../api";

export const addPair = createAsyncThunk(
    'services/add/post/',
    async (pair: Pair, thunkAPI) => {
        try {
            const resp = await PostService.addPair(pair);
            const response = [];
            const res = {
                id: 'addPost',
                message: `Сервис ${pair.service} успешно добавлен`,
                error: false,
                data: {
                    name: 200,
                    message: response,
                },
            }
            return res;
        } catch (error) {
            console.log(error)
            const data = {
                id: 'addPost',
                status: error.response.status,
                message: error.response.data.error,
            }
            const res = {
                error: true,
                data,
            }
            return res;
        }
    }
)