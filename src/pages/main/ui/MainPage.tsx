
import { PanelOfPairs } from '@/services/passKeeper/gadgets/panelOfPairs'
import styles from './styles/MainPage.module.css'
import { OperationWithPairsNotification } from '@/notifications/widgets/operationWithPairsNotification'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <OperationWithPairsNotification></OperationWithPairsNotification>
            <PanelOfPairs></PanelOfPairs>
        </div>
    )
}