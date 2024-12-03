import styles from './styles/Error.module.css'

export const Error = ({ message }) => {
    return (
        <div className={styles.error}>
            <span>{message}</span>
        </div>
    )
}