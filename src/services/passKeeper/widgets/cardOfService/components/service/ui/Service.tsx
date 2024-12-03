import { ServiceInputContext } from "@/services/passKeeper/shared/ui/serviceInput";
import { useServiceContext } from "../lib/context/Context"
import { BigServiceInput } from "@/services/passKeeper/entities/bigServiceInput";
import styles from './styles/Service.module.css'

export const Service = () => {
    const pair = useServiceContext();
    const isLocked = pair.getState().isLocked;
    return (
        <div className={styles.container}>
            <ServiceInputContext.Provider value={pair}>
                <span className={styles.span}>Имя сервиса:</span>
                <BigServiceInput lock={isLocked}></BigServiceInput>
            </ServiceInputContext.Provider>
        </div>
    )
}