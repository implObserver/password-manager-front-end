import { BigPasswordInput } from "@/services/passKeeper/entities/bigPasswordInput";
import { usePasswordContext } from "../lib/context/Context"
import { PasswordInputContext } from "@/services/passKeeper/shared/ui/passwordInput";
import styles from './styles/Password.module.css'

export const Password = () => {
    const pair = usePasswordContext();

    return (
        <div className={styles.container}>
            <PasswordInputContext.Provider value={pair}>
                <span className={styles.span}>Пароль:</span>
                <BigPasswordInput lock={pair.getState().isLocked}></BigPasswordInput>
            </PasswordInputContext.Provider>
        </div>
    )
}