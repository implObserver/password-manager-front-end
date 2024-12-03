import { usePasswordFormContext } from '../lib/context/Context';
import styles from './styles/PasswordForm.module.css'

export const PasswordForm = () => {
    const context = usePasswordFormContext();

    const pair = context.getState();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPair: Pair = { ...pair };
        newPair[e.target.id] = e.target.value
        context.setState(newPair);
    }

    return (
        <form className={styles.password_form}>
            <div className={styles.form_group}>
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

                <input
                    onChange={changeHandler}
                    className={styles.input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                    value={pair.password}
                    autoComplete="on"
                    required>
                </input>
            </div>
            <button className={styles.button} type='submit'> Save </button>
        </form>
    )
}