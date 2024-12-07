import { createContext, useContext } from "react";

export const SearchPairsContext = createContext<undefined | StateHandler<Pair[]>>(undefined);

export const useSearchPairsContext = () => {
    const props = useContext(SearchPairsContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SearchPairsContext');
    }
    return props;
}