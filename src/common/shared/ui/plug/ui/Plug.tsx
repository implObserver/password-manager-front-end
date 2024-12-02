import { usePlugContext } from '../lib/context/Context'
import styles from './styles/Plug.module.css'

export const Plug = () => {
    const context = usePlugContext();

    return (
        <div
            className={
                `${context.state
                    ? `${styles.plug} ${context.index}`
                    : ''}`
            }>
        </div>
    )
}