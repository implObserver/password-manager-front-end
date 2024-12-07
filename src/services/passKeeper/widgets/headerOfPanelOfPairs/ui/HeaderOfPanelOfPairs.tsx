import { useDeclineService } from "@/common/shared/lib";
import { selectPairs } from "@/services/passKeeper/entities/pair"
import { useSelector } from "react-redux"
import styles from './styles/HeaderOfPanelOfPairs.module.css'
import { SearchPairs, SearchPairsContext } from "@/services/passKeeper/features/searchPairs";
import { useHeaderShowcaseContext } from "../context/Context";

export const HeaderOfPanelOfPairs = () => {
    const context = useHeaderShowcaseContext();
    const pairs = context.getState();
    const count = pairs.length;
    const text = useDeclineService(count);

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.counter}>{text}</span>
            </div>
            <div>
                <SearchPairsContext.Provider value={context}>
                    <SearchPairs></SearchPairs>
                </SearchPairsContext.Provider>
            </div>
        </div>
    )
}