import { BigPasswordInput } from "@/services/passKeeper/entities/bigPasswordInput";
import { usePasswordContext } from "../lib/context/Context"
import { PasswordInputContext } from "@/services/passKeeper/shared/ui/passwordInput";

export const Password = () => {
    const pair = usePasswordContext();

    return (
        <div>
            <PasswordInputContext.Provider value={pair}>
                <span>Пароль:</span>
                <BigPasswordInput lock={pair.getState().isLocked}></BigPasswordInput>
            </PasswordInputContext.Provider>
        </div>
    )
}