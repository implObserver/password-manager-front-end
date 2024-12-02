export const substringIncludes = (string: string, ...sunstrings: Array<string>) => {
    let include = false;
    sunstrings.forEach(substring => {
        if (string.includes(substring)) {
            include = true;
        }
    });
    return include;
}