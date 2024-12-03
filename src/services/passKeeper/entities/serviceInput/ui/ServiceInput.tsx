import { useServiceInputContext } from "../lib/context/Context";
import styles from './styles/PasswordInput.module.css'

export const ServiceInput = () => {
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
            required>
        </input>
    )
}