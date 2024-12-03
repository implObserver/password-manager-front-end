import { useSelector } from "react-redux";
import styles from './styles/PaginationShowcaseOfPairs.module.css'
import {
    Pair,
    PairContext,
    pairsActions,
    selectCurrentPage,
    selectItemsPerPage,
    selectPaginatedPairs,
    selectPairs
} from "@/services/passKeeper/entities/pair";
import { useAppDispatch } from "@/common/shared/lib";

export const PaginationShowcaseOfPairs = () => {
    const dispatch = useAppDispatch();
    const pairs = useSelector(selectPairs);
    const paginatedPairs = useSelector(selectPaginatedPairs);
    const currentPage = useSelector(selectCurrentPage);
    const itemsPerPage = useSelector(selectItemsPerPage);
    const totalPages = Math.max(1, Math.ceil(pairs.length / itemsPerPage));

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
            <div className={styles.container}>
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