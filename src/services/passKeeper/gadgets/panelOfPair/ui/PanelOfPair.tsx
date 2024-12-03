import { Card } from '@/services/passKeeper/widgets/cardOfService'
import styles from './styles/PanelOfPair.module.css'

export const PanelOfPair = () => {
    return (
        <div className={styles.panel}>
            <Card></Card>
        </div>
    )
}