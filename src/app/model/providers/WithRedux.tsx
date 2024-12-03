import { Provider } from "react-redux"
import { persistor, store } from "../store/Store"
import { PersistGate } from "redux-persist/integration/react"

export const WithRedux = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>

    )
}