import { usePasswordInputContext } from "../lib/context/Context";
import styles from './styles/PasswordInput.module.css'

interface PasswordInputProps {
    lock?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ lock }) => {
    const context = usePasswordInputContext();

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
            id="password"
            name="password"
            type="text"
            placeholder="Password..."
            value={pair.password}
            autoComplete="on"
            disabled={lock}
            required>
        </input>
    )
}