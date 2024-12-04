import { useDeclineService } from "@/common/shared/lib";
import { selectPairs } from "@/services/passKeeper/entities/pair"
import { useSelector } from "react-redux"
import styles from './styles/HeaderOfPanelOfPairs.module.css'

export const HeaderOfPanelOfPairs = () => {
    const pairs = useSelector(selectPairs);
    const count = pairs.length;
    const text = useDeclineService(count);

    return (
        <div className={styles.container}>
            <span className={styles.counter}>{text}</span>
        </div>
    )
}