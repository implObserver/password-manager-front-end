import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles/MainLayout.module.css'
import { Footer } from '@/structures/gadgets/footer';
import { Header } from '@/structures/gadgets/header';

export const MainLayout: React.FC = () => {
    return (
        <div className={styles.main_layout}>
            <div className={styles.plug}>
                <header className={styles.header}>
                    <Header></Header>
                </header>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};