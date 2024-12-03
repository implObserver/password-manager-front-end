import { ServiceInput } from "@/services/passKeeper/shared/ui/serviceInput";
import styles from './styles/BigServiceInput.module.css'

export const BigServiceInput = ({lock}) => {
    return (
        <div className={styles.input}>
            <ServiceInput lock={lock}></ServiceInput>
        </div>
    )
}