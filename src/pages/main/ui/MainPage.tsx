import { PasswordsPanel } from '@/services/passKeeper/gadgets/passwordsPanel'
import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <PasswordsPanel></PasswordsPanel>
        </div>
    )
}