import { useServiceInputContext } from "../lib/context/Context";
import styles from './styles/ServiceInput.module.css'

interface ServiceInputProps {
    lock?: boolean; // lock делаем необязательным
}

export const ServiceInput: React.FC<ServiceInputProps> = ({ lock }) => {
    const context = useServiceInputContext();

    const pair = context.getState();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPair: Pair = { ...pair };
        newPair[e.target.id] = e.target.value
        context.setState(newPair);
    }

    return (
        <input
            onChange={changeHandler}
            className={styles.input}
            id="service"
            name="service"
            type="text"
            placeholder="Service..."
            value={pair.service}
            autoComplete="on"
            disabled={lock}
            required>
        </input>
    )
}