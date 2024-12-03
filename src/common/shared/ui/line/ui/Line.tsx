import styles from './styles/Recent.module.css'

export const Line = ({ text }) => {
    return (
        <div className={`
        ${styles.recent}
        ${text.length > 0
                ? styles.gap
                : ''}`
        }>
            <div className={styles.recent_name}>
                {text}
            </div>
            <div className={styles.recent_line}></div>
        </div>
    )
}