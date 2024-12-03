
import { PanelOfPair } from '@/services/passKeeper/gadgets/panelOfPair'
import styles from './styles/Service.module.css'
import { OperationWithPairsNotification } from '@/notifications/widgets/operationWithPairsNotification'

export const Service = () => {
    return (
        <div className={styles.page_service}>
            <OperationWithPairsNotification></OperationWithPairsNotification>
            <PanelOfPair></PanelOfPair>
        </div>
    )
}