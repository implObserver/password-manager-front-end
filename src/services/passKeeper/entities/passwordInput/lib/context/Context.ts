import { createContext, useContext } from "react";

export const PasswordInputContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const usePasswordInputContext = () => {
    const props = useContext(PasswordInputContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PasswordInputContext');
    }
    return props;
}