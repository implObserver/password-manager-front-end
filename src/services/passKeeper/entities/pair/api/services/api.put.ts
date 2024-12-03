import { asyncTimeout } from "@/common/shared/lib";

export const PutService = {
    async editPair(pair: Pair): Promise<ResponseData> {
        await asyncTimeout(1000);
        return {
            status: 200,
            message: pair,
        }
    },
}