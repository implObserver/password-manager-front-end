import { BeatLoader } from "react-spinners"
import styles from './styles/SpinnerLoader.module.css'

export const SpinnerLoader = () => {
    return (
        <div className={styles.container_of_spinner}>
            <BeatLoader className={styles.pacman}
                color={'#3ad5b6'}
                loading={true}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}