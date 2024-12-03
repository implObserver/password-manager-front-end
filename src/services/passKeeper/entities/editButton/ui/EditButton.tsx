import { Button } from "@/common/shared/ui/button"
import styles from './styles/EditButton.module.css'

export const EditButton = ({ name }) => {
    return (
        <div className={styles.button}>
            <Button name={name}></Button>
        </div>
    )
}