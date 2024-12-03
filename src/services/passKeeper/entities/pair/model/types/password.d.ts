interface Pair {
    service: string,
    password: string,
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