export const isError = (status: number) => {
    const errors = [400, 401, 404, 500];
    return errors.includes(status);
}

export const isDenied = (status: number) => {
    const denied = [403];
    return denied.includes(status);
}

export const isAccess = (status: number) => {
    const access = [200, 201, 204];
    return access.includes(status);
}