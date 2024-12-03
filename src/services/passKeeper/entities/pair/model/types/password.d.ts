interface Pair {
    id: number;
    service: string,
    password: string,
    isLocked?: boolean,
}

interface PaginationPairs {
    pairs: Pair[],
    currentPage: number,
    itemsPerPage: number,
}

interface EmulateResponse {
    id: string,
    message: string,
    isError: boolean,
    data: ResponseData,
}

interface ResponseData {
    status: number,
    message: Pair | string,
}