import { NotificationDistributor } from "@/notifications/features/notificationDistributor"
import styles from './styles/OperationWithPairsNotification.module.css'

export const OperationWithPairsNotification = () => {
    return (
        <div className={styles.container}>
            <NotificationDistributor ids={['addPair', 'deletePair', 'editPair']}></NotificationDistributor>
        </div>
    )
}