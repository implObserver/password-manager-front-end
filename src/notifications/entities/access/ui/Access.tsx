import styles from './styles/Access.module.css'

export const Access = ({ message }) => {
    return (
        <div className={styles.access}>
            <span>{message}</span>
        </div>
    )
}