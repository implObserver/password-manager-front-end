import { Button } from "@/common/shared/ui/button"
import styles from './styles/DeleteButton.module.css'

export const DeleteButton = () => {
    return (
        <div className={styles.button}>
            <Button name={'Delete'}></Button>
        </div>
    )
}