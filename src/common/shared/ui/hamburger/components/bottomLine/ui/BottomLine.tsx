import { useHamburgerContext } from '../../../lib/context/Context'
import styles from './styles/BottomLine.module.css'

export const BottomLine = () => {
    const context = useHamburgerContext();
    return (
        <div className={`${styles.bottom__line} ${context ? styles.open : ''}`}>

        </div>
    )
}