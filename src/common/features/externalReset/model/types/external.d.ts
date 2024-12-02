interface ExternalResetContextType {
    index: string,
    state: {
        toggle: () => void;
        getState: () => boolean;
        setState: (state: boolean) => void;
    },
}