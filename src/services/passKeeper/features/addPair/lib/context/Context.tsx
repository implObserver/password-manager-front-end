import { createContext, useContext } from "react";

export const AddPairContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const useAddPairContext = () => {
    const props = useContext(AddPairContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a AddPairContext');
    }
    return props;
}