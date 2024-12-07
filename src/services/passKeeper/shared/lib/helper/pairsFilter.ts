export const pairsFilter = (pairs: Pair[], key: string) => {
    return pairs.filter(pair => pair.service.includes(key));
}