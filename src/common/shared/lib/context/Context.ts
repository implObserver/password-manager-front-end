import { createContext, useContext } from "react";

export const Context = createContext<undefined | any>(undefined);

export function useAnyContext() {
    const props = useContext(Context);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProductContext');
    }
    return props;
}