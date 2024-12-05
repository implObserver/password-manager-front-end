import { ServiceInputContext } from "@/services/passKeeper/shared/ui/serviceInput";
import { useServiceContext } from "../lib/context/Context"
import { BigServiceInput } from "@/services/passKeeper/entities/bigServiceInput";
import styles from './styles/Service.module.css'
import { CopyText } from "@/common/features/copyText";
import { useCustomState } from "@/common/shared/lib";

export const Service = () => {
    const pair = useServiceContext();
    const focus = useCustomState(false);

    const focusHandler = () => {
        focus.setState(true);
    }
    const isLocked = pair.getState().isLocked;
    return (
        <div className={styles.container}>
            <ServiceInputContext.Provider value={pair}>
                <span className={styles.span}>Имя сервиса:</span>
                <div className={styles.service_section}>
                    <div onFocus={focusHandler} className={styles.service}>
                        <BigServiceInput lock={isLocked}></BigServiceInput>
                    </div>
                    <div className={styles.service_copy}>
                        <CopyText text={pair.getState().service}></CopyText>
                    </div>
                </div>
            </ServiceInputContext.Provider>
        </div>
    )
}