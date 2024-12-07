import { useSelector } from "react-redux";
import styles from './styles/PaginationShowcaseOfPairs.module.css'
import {
    Pair,
    PairContext,
    pairsActions,
    selectCurrentPage,
    selectItemsPerPage,
} from "@/services/passKeeper/entities/pair";
import { useAppDispatch } from "@/common/shared/lib";
import { usePairsShowcaseContext } from "../lib/context/Context";
import { useEffect } from "react";

export const PaginationShowcaseOfPairs = () => {
    const dispatch = useAppDispatch();
    const context = usePairsShowcaseContext();
    const pairs = context.getState();
    const currentPage = useSelector(selectCurrentPage);
    const itemsPerPage = useSelector(selectItemsPerPage);
    const totalPages = Math.max(1, Math.ceil(pairs.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPairs = pairs.slice(startIndex, startIndex + itemsPerPage);
    
    useEffect(() => {
        const totalPage = Math.max(1, Math.ceil(pairs.length / itemsPerPage));
        dispatch(pairsActions.goToPage(totalPage));
    }, [pairs])

    const loadNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(pairsActions.goToNextPage());
        }
    };

    const loadPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(pairsActions.goToPreviousPage());
        }
    };

    const fill = () => {
        return paginatedPairs.map((pair, index) => {
            return (
                <div className={styles.wrapper} key={pair.service}>
                    <PairContext.Provider value={pair}>
                        <Pair></Pair>
                    </PairContext.Provider>
                </div>
            )
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.pairs}>
                {fill()}
            </div>
            <div className={totalPages === 1
                ? styles.block
                : styles.pagination}>
                <button className={styles.pagination_btn}
                    onClick={loadPreviousPage}>
                    назад
                </button>
                <span className={styles.total_pages}>
                    {currentPage} / {totalPages}
                </span>
                <button
                    className={styles.pagination_btn}
                    onClick={loadNextPage}>
                    вперед
                </button>
            </div>
        </div >
    )
};