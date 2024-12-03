import { Button } from "@/common/shared/ui/button"
import styles from './styles/SaveButton.module.css'

export const SaveButton = () => {
    return (
        <div className={styles.button}>
            <Button name={'Save'}></Button>
        </div>
    )
}