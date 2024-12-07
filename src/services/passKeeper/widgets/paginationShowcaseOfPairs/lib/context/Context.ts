import { createContext, useContext } from "react";

export const PairsShowcaseContext = createContext<undefined | StateHandler<Pair[]>>(undefined);

export const usePairsShowcaseContext = () => {
    const props = useContext(PairsShowcaseContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PairsShowcaseContext');
    }
    return props;
}