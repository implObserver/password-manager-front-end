import { createContext, useContext } from "react";

export const ExternalResetContext = createContext<undefined | ExternalResetContextType>(undefined);

export function useExternalResetContext() {
    const props = useContext(ExternalResetContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ExternalResetContext');
    }
    return props;
}