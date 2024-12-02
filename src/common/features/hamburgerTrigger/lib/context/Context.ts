import { createContext, useContext } from "react";

export const TriggerContext = createContext<undefined | TriggerContextType>(undefined);

export function useTriggerContext() {
    const props = useContext(TriggerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TriggerContext');
    }
    return props;
}