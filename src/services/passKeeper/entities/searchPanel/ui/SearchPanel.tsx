import { SearchInput } from "@/services/passKeeper/shared/ui/searchInput"
import styles from './styles/SearchPanel.module.css'

export const SearchPanel = () => {
    return (
        <div>
            <div className={styles.input}>
                <SearchInput placeholder={'Поиск паролей'}></SearchInput>
            </div>
        </div>
    )
}