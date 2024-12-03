import { asyncTimeout } from "@/common/shared/lib"

export const PostService = {
    async addPair(pair: Pair): Promise<ResponseData> {
        await asyncTimeout(1000);
        const isError = Math.random() < 0;
        if (isError) {
            throw {
                status: 403,
                message: 'Sorry, Error',
            };
        } else {
            const id = Date.now();
            const newPair: Pair = {
                id,
                service: pair.service,
                password: pair.password,
                isLocked: false,
            }
            return {
                status: 200,
                message: newPair,
            }
        }
    },
}