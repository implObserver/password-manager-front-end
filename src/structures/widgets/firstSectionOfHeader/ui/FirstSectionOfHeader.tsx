import { Logo } from '@/common/entities/logo'
import styles from './styles/FirstSectionOfHeader.module.css'

export const FirstSectionOfHeader = () => {
    return (
        <div className={styles.header_section_first}>
            <Logo></Logo>
        </div>
    )
}