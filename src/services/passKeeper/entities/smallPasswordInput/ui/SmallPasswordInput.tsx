import { PasswordInput } from "@/services/passKeeper/shared/ui/passwordInput";
import styles from './styles/SmallPasswordInput.module.css'

export const SmallPasswordInput = () => {
    return (
        <div className={styles.input}>
            <PasswordInput></PasswordInput>
        </div>
    )
}