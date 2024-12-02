import { createContext, useContext } from "react";

export const PasswordFormContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const usePasswordFormContext = () => {
    const props = useContext(PasswordFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PasswordFormContext');
    }
    return props;
}