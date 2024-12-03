import { createContext, useContext } from "react";

export const GeneratorFormContext = createContext<undefined | StateHandler<Settings>>(undefined);

export const useGeneratorFormContext = () => {
    const props = useContext(GeneratorFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a GeneratorFormContext');
    }
    return props;
}