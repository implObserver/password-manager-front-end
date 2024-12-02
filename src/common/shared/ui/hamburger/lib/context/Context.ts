import { createContext, useContext } from "react";

export const HamburgerContext = createContext<undefined | boolean>(undefined);

export const useHamburgerContext = () => {
    const props = useContext(HamburgerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a HamburgerContext');
    }
    return props;
}