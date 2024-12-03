import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { passwordsActions } from "@/services/passKeeper/entities/password";
import { PasswordForm, PasswordFormContext } from "@/services/passKeeper/entities/passwordForm"

export const AddPassword = () => {
    const dispatch = useAppDispatch();

    const initialPair: Pair = {
        service: '',
        password: '',
    }

    const pair = useCustomState(initialPair);

    const submitHandler = () => {
        dispatch(passwordsActions.addPassword(pair.getState()))
    }

    return (
        <div onSubmit={submitHandler}>
            <PasswordFormContext.Provider value={pair}>
                <PasswordForm></PasswordForm>
            </PasswordFormContext.Provider>
        </div>
    )
}