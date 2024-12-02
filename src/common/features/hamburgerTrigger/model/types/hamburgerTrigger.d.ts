interface TriggerContextType {
    toggle: () => void;
    getState: () => boolean;
    setState: (state: boolean) => void;
}