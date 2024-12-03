interface ErrorType {
    id: string,
    status: number,
    message: string,
}

interface Statuses {
    errors: ErrorType[],
    accesses: Access[],
}

interface Access {
    id: string,
    message: string,
    status: number,
}