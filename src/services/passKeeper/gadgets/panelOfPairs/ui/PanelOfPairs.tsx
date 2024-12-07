import { PaginationShowcaseOfPairs, PairsShowcaseContext } from "@/services/passKeeper/widgets/paginationShowcaseOfPairs"
import styles from './styles/PanelOfPairs.module.css'
import { HeaderOfPanelOfPairs, HeaderShowcaseContext } from "@/services/passKeeper/widgets/headerOfPanelOfPairs"
import { DispatcherOfPair } from "@/services/passKeeper/widgets/dispatcherOfPair/ui/DispatcherOfPair"
import { useSelector } from "react-redux"
import { selectPairs } from "@/services/passKeeper/entities/pair"
import { useCustomState } from "@/common/shared/lib"
import { useEffect } from "react"

export const PanelOfPairs = () => {
    const pairs = useSelector(selectPairs);
    const displayPairs = useCustomState(pairs);

    useEffect(() => {
        displayPairs.setState(pairs);
    }, [pairs])

    return (
        <div className={styles.panel}>
            <HeaderShowcaseContext.Provider value={displayPairs}>
                <HeaderOfPanelOfPairs></HeaderOfPanelOfPairs>
            </HeaderShowcaseContext.Provider>
            <PairsShowcaseContext.Provider value={displayPairs}>
                <PaginationShowcaseOfPairs></PaginationShowcaseOfPairs>
            </PairsShowcaseContext.Provider>
            <DispatcherOfPair></DispatcherOfPair>
        </div>
    )
}