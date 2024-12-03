import { createContext, useContext } from "react";

export const PairContext = createContext<undefined | Pair>(undefined);

export const usePairContext = () => {
    const props = useContext(PairContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PairContext');
    }
    return props;
}