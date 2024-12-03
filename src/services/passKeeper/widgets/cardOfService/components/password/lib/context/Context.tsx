import { createContext, useContext } from "react";

export const PasswordContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const usePasswordContext = () => {
    const props = useContext(PasswordContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PasswordContext');
    }
    return props;
}