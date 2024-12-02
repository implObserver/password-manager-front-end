import { useHamburgerContext } from '../../../lib/context/Context'
import styles from './styles/TopLine.module.css'

export const TopLine = () => {
    const context = useHamburgerContext();

    return (
        <div className={`${styles.top__line} ${context ? styles.open : ''}`}>

        </div>
    )
}