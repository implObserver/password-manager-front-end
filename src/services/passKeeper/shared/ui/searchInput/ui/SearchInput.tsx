import styles from './styles/SearchInput.module.css'

export const SearchInput = ({ placeholder }) => {
    return (
        <div className={styles.input}>
            <input placeholder={placeholder} type="text" />
        </div>
    )
}