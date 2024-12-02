import { useState } from 'react';

export const useCustomState = <T = boolean>(state1: T = false as T, state2: T = true as T): StateHandler<T> => {
    const [state, setNewState] = useState<T>(state1);

    const toggle = () => {
        const newState = state === state1 ? state2 : state1;
        setNewState(newState);
    };
    const getState = () => state;

    return { toggle, getState, setState: setNewState };
};