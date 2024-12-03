import { createContext, useContext } from "react";

export const EditPairContext = createContext<undefined | StateHandler<Pair>>(undefined);

export const useEditPairContext = () => {
    const props = useContext(EditPairContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EditPairContext');
    }
    return props;
}