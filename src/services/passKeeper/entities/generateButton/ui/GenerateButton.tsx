import { Button } from "@/common/shared/ui/button"
import styles from './styles/GenerateButton.module.css'

export const GenerateButton = () => {
    return (
        <div className={styles.button}>
            <Button name={'Generate'}></Button>
        </div>
    )
}