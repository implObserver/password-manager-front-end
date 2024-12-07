export const pairsFilter = (pairs: Pair[], key: string) => {
    const lowerCaseKey = key.toLowerCase();
    return pairs.filter(pair => pair.service.toLowerCase().includes(lowerCaseKey));
}