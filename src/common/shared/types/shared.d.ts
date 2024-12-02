interface StateHandler<T> {
    toggle: () => void;
    getState: () => T;
    setState: (state: T) => void;
}

interface PlugContextType {
    state: boolean,
    index: string,
}

interface DropdownContextType {
    margin: boolean,
    state: boolean,
}