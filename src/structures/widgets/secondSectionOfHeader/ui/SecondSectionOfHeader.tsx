import { Title } from "@/common/entities/title"
import styles from './styles/SecondSectionOfHeader.module.css'

export const SecondSectionOfHeader = () => {
    return (
        <div className={styles.title}>
            <Title />
        </div>
    )
}