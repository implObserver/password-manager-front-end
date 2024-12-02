import styles from './styles/Button.module.css'

export const Button = ({ name }) => {
    return (
        <div className={styles.button}>
            <button>
                <span>{name}</span>
            </button>
        </div>
    )
}