import { SmallPasswordInput } from "@/services/passKeeper/entities/smallPasswordInput/ui/SmallPasswordInput"
import { usePasswordContext } from "../lib/context/Context"
import styles from './styles/Password.module.css'
import { useCustomState } from "@/common/shared/lib";
import { ExternalReset, ExternalResetContext } from "@/common/features/externalReset";
import { Generator } from "../components/generator";
import { PasswordInputContext } from "@/services/passKeeper/shared/ui/passwordInput";

export const Password = () => {
    const pair = usePasswordContext();
    const focus = useCustomState(false);

    const focusHandler = () => {
        focus.setState(true);
    }

    const externalResetContext: ExternalResetContextType = {
        state: focus,
        index: `generator`,
    }

    return (
        <div>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <PasswordInputContext.Provider value={pair}>
                        <div onFocus={focusHandler} className={styles.password}>
                            <SmallPasswordInput></SmallPasswordInput>
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