import { ServiceInput } from "@/services/passKeeper/shared/ui/serviceInput";
import styles from './styles/SmallServiceInput.module.css'

export const SmallServiceInput = () => {
    return (
        <div className={styles.input}>
            <ServiceInput></ServiceInput>
        </div>
    )
}