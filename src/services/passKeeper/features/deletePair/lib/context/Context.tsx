import { createContext, useContext } from "react";

export const DeletePairContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const useDeletePairContext = () => {
    const props = useContext(DeletePairContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a DeletePairContext');
    }
    return props;
}