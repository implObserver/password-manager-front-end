import { PasswordInput } from "@/services/passKeeper/shared/ui/passwordInput";
import styles from './styles/BigPasswordInput.module.css'

export const BigPasswordInput = ({ lock }) => {
    return (
        <div className={styles.input}>
            <PasswordInput lock={lock}></PasswordInput>
        </div>
    )
}