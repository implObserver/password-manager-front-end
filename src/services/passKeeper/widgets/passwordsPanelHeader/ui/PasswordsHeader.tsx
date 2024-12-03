import { useDeclineService } from "@/common/shared/lib";
import { selectPairs } from "@/services/passKeeper/entities/password"
import { useSelector } from "react-redux"
import styles from './styles/PasswordsHeader.module.css'

export const PasswordsHeader = () => {
    const pairs = useSelector(selectPairs);
    const count = pairs.length;
    const text = useDeclineService(count);

    return (
        <div>
            <span className={styles.counter}>{text}</span>
        </div>
    )
}