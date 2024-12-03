import { createContext, useContext } from "react";

export const ServiceContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const useServiceContext = () => {
    const props = useContext(ServiceContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ServiceContext');
    }
    return props;
}