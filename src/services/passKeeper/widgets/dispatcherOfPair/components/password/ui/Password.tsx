import { PasswordInput } from "@/services/passKeeper/entities/passwordInput/ui/PasswordInput"
import { usePasswordContext } from "../lib/context/Context"
import { PasswordInputContext } from "@/services/passKeeper/entities/passwordInput/lib/context/Context";
import styles from './styles/Password.module.css'
import { useCustomState } from "@/common/shared/lib";
import { Link } from "react-router-dom";
import { ExternalReset, ExternalResetContext } from "@/common/features/externalReset";
import { Dropdown, DropdownContext } from "@/common/shared/ui/dropdownElement";
import { GeneratePassword } from "@/services/passKeeper/features/generatePassword/ui/GeneratePassword";
import { Generator } from "../components/generator";

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
                            <PasswordInput></PasswordInput>
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