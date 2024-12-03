import { PaginationShowcaseOfPairs } from "@/services/passKeeper/widgets/paginationShowcaseOfPairs"
import styles from './styles/PanelOfPairs.module.css'
import { HeaderOfPanelOfPairs } from "@/services/passKeeper/widgets/headerOfPanelOfPairs"
import { DispatcherOfPair } from "@/services/passKeeper/widgets/dispatcherOfPair/ui/DispatcherOfPair"

export const PanelOfPairs = () => {
    return (
        <div className={styles.panel}>
            <HeaderOfPanelOfPairs></HeaderOfPanelOfPairs>
            <PaginationShowcaseOfPairs></PaginationShowcaseOfPairs>
            <DispatcherOfPair></DispatcherOfPair>
        </div>
    )
}