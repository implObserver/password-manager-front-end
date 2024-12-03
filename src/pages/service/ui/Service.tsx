
import { PanelOfPair } from '@/services/passKeeper/gadgets/panelOfPair'
import styles from './styles/Service.module.css'

export const Service = () => {
    return (
        <div className={styles.page_service}>
            <PanelOfPair></PanelOfPair>
        </div>
    )
}