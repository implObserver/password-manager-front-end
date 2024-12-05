import { BigPasswordInput } from "@/services/passKeeper/entities/bigPasswordInput";
import { usePasswordContext } from "../lib/context/Context"
import { PasswordInputContext } from "@/services/passKeeper/shared/ui/passwordInput";
import styles from './styles/Password.module.css'
import { useCustomState } from "@/common/shared/lib";
import { ExternalReset, ExternalResetContext } from "@/common/features/externalReset";
import { Generator } from "../components/generator";
import { CopyText } from "@/common/features/copyText";

export const Password = () => {
    const pair = usePasswordContext();
    const focus = useCustomState(false);

    const focusHandler = () => {
        focus.setState(true);
    }

    const externalResetContext: ExternalResetContextType = {
        state: focus,
        index: `card_generator`,
    }

    return (
        <div className={styles.container}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <PasswordInputContext.Provider value={pair}>
                        <span className={styles.span}>Пароль:</span>
                        <div className={styles.password_section}>
                            <div onFocus={focusHandler} className={styles.password}>
                                <BigPasswordInput lock={pair.getState().isLocked}></BigPasswordInput>
                            </div>
                            <div className={styles.password_copy}>
                                <CopyText text={pair.getState().password}></CopyText>
                            </div>
                        </div>
                        <div>
                            <div className={
                                focus.getState()
                                    ? styles.generator
                                    : styles.block
                            }>
                                <Generator></Generator>
                            </div>
                        </div>
                    </PasswordInputContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}