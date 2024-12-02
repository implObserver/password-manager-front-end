import { useCustomState } from "@/common/shared/lib"
import { PasswordForm, PasswordFormContext } from "@/services/passKeeper/entities/passwordForm"

export const AddPassword = () => {
    const initialPair: Pair = {
        service: '',
        password: '',
    }

    const pair = useCustomState(initialPair);

    const submitHandler = () => {
        
    }

    return (
        <div onChange={submitHandler}>
            <PasswordFormContext.Provider value={pair}>
                <PasswordForm></PasswordForm>
            </PasswordFormContext.Provider>
        </div>
    )
}