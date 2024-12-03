import { usePasswordContext } from "../lib"
import styles from './styles/Password.module.css'
import arrow from '../../../../../common/shared/assets/arrow.svg'
export const Password = () => {
    const context = usePasswordContext();

    return (
        <div className={styles.pair}>
            <div className={styles.service}>
                {context.service}
            </div>
            <div className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 24 24">
                    <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                </svg>
            </div>
        </div>
    )
}