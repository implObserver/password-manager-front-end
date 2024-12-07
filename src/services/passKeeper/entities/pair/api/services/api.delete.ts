import { asyncTimeout } from "@/common/shared/lib";

export const DeleteService = {
    async deletePair(pair: Pair): Promise<ResponseData> {
        await asyncTimeout(1000);
        const isError = Math.random() <= 0.5;
        if (isError) {
            throw {
                status: 403,
                message: 'Sorry, Error',
            };
        } else {
            return {
                status: 200,
                message: pair,
            }
        }
    },
}