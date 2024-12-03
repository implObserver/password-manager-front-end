
import { useGeneratorFormContext } from '../lib/context/Context';
import styles from './styles/GeneratorForm.module.css'

export const GeneratorForm = () => {
    const context = useGeneratorFormContext();

    const data: Settings = {
        length: context.getState().length,
        useUppercase: context.getState().useUppercase,
        useLowerCase: context.getState().useLowerCase,
        useNumbers: context.getState().useNumbers,
        useSpecialChars: context.getState().useSpecialChars,
        customChars: context.getState().customChars,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = { ...data };

        if (e.target.type === 'checkbox') {
            newData[e.target.id] = e.target.checked;
        } else {
            newData[e.target.id] = e.target.value;
        }

        context.setState(newData);
    }

    const isCustomCharsFilled = data.customChars !== '';

    return (
        <div className={styles.modal}>

            <label htmlFor="length">Length:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="length"
                name="length"
                type="number"
                max={20}
                value={data.length}
                placeholder="длина пароля"
                disabled={isCustomCharsFilled}
                required>
            </input>

            <label htmlFor="useUppercase">Use Uppercase:</label>
            <input
                onChange={handle}
                className={styles.checkbox}
                id="useUppercase"
                name="useUppercase"
                type="checkbox"
                defaultChecked={data.useUppercase}
                disabled={isCustomCharsFilled}
                required>
            </input>

            <label htmlFor="useLowerCase">Use Lowercase:</label>
            <input
                onChange={handle}
                className={styles.checkbox}
                id="useLowerCase"
                name="useLowerCase"
                type="checkbox"
                defaultChecked={data.useLowerCase}
                disabled={isCustomCharsFilled}
                required>
            </input>

            <label htmlFor="useNumbers">Use Numbers:</label>
            <input
                onChange={handle}
                className={styles.checkbox}
                id="useNumbers"
                name="useNumbers"
                type="checkbox"
                defaultChecked={data.useNumbers}
                disabled={isCustomCharsFilled}
                required>
            </input>

            <label htmlFor="useSpecialChars">Use Special Chars:</label>
            <input
                onChange={handle}
                className={styles.checkbox}
                id="useSpecialChars"
                name="useSpecialChars"
                type="checkbox"
                defaultChecked={data.useSpecialChars}
                disabled={isCustomCharsFilled}
                required>
            </input>

            <label htmlFor="customChars">Custom Chars:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="customChars"
                name="customChars"
                type="text"
                placeholder="Enter chars"
                value={data.customChars}
                autoComplete="on">
            </input>
        </div>
    )
}