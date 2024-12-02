import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './styles/EmptyLayout.module.css'

export const EmptyLayout: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className={styles.main_layout}>
            <div className={styles.plug}>
                <header></header>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
                <footer></footer>
            </div>
        </div>
    );
};