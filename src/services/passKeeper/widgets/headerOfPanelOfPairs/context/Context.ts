import { createContext, useContext } from "react";

export const HeaderShowcaseContext = createContext<undefined | StateHandler<Pair[]>>(undefined);

export const useHeaderShowcaseContext = () => {
    const props = useContext(HeaderShowcaseContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a HeaderShowcaseContext');
    }
    return props;
}