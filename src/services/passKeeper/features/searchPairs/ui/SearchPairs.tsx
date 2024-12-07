import { SearchPanel } from "@/services/passKeeper/entities/searchPanel"
import { useSearchPairsContext } from "../lib/context/Context"
import { pairsFilter } from "@/services/passKeeper/shared/lib";
import { useSelector } from "react-redux";
import { selectPairs } from "@/services/passKeeper/entities/pair";

export const SearchPairs = () => {
    const allpairs = useSelector(selectPairs);
    const context = useSearchPairsContext();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.value;
        const pairs = pairsFilter(allpairs, key);
        context.setState(pairs);
    }

    return (
        <div onChange={changeHandler}>
            <SearchPanel></SearchPanel>
        </div>
    )
}