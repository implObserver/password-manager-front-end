import { PaginationShowcaseOfPasswords } from "@/services/passKeeper/widgets/paginationShowcaseOfPasswords"
import { PasswordsHeader } from "@/services/passKeeper/widgets/passwordsPanelHeader"
import styles from './styles/PasswordsPanel.module.css'

export const PasswordsPanel = () => {
    return (
        <div className={styles.panel}>
            <PasswordsHeader></PasswordsHeader>
            <PaginationShowcaseOfPasswords></PaginationShowcaseOfPasswords>
        </div>
    )
}