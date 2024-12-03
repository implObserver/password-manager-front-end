
import { PanelOfPairs } from '@/services/passKeeper/gadgets/panelOfPairs'
import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <PanelOfPairs></PanelOfPairs>
        </div>
    )
}