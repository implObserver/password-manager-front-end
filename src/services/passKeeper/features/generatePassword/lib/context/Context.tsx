import { createContext, useContext } from "react";

export const GeneratePasswordContext = createContext<undefined | StateHandler<Settings>>(undefined);

export const useGeneratePasswordContext = () => {
    const props = useContext(GeneratePasswordContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a GeneratePasswordContext');
    }
    return props;
}