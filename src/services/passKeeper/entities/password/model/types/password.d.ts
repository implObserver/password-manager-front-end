interface Pair {
    service: string,
    password: string,
}

interface PaginationPairs {
    pairs: Pair[],
    currentPage: number,
    itemsPerPage: number,
}