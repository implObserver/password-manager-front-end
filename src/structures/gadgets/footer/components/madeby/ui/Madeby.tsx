import { Link } from "react-router-dom"
import styles from './styles/Madeby.module.css'
import { GoogleColorizedText } from "@/common/shared/ui/googleColorizedText"

export const Madeby = () => {

    return (
        <div className={styles.container}>
            Made by
            <Link className={styles.link} to='https://github.com/implObserver'>
                <div>
                    <GoogleColorizedText word={'Observer'}></GoogleColorizedText>
                </div>
            </Link>
        </div>
    )
}