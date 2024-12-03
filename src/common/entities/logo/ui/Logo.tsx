import { GoogleColorizedText } from '@/common/shared/ui/googleColorizedText'
import styles from './styles/Logo.module.css'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <span className={styles.first_word}>
                <GoogleColorizedText word={'Passwords'}></GoogleColorizedText>
            </span>
            <span className={styles.second_word}>Account</span>
        </div>
    )
}