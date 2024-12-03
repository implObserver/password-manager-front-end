import { createContext, useContext } from "react";

export const ServiceInputContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const useServiceInputContext = () => {
    const props = useContext(ServiceInputContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ServiceInputContext');
    }
    return props;
}