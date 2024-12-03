import styles from './styles/Denied.module.css'

export const Denied = ({ message }) => {
    console.log(message)
    return (
        <div className={styles.denied}>
            <span>{message}</span>
        </div>
    )
}