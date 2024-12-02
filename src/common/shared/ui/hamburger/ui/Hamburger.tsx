import styles from './styles/Hamburger.module.css'
import { useHamburgerContext } from '../lib/context/Context';
import { BottomLine } from '../components/bottomLine';
import { CenterLine } from '../components/centerLine';
import { TopLine } from '../components/topLine';

export const Hamburger = () => {
    const status = useHamburgerContext();
    return (
        <div className={styles.container}>
            <div className={`${styles.hamburger__menu} ${status ? styles.open : ''}`}>
                <TopLine></TopLine>
                <CenterLine></CenterLine>
                <BottomLine></BottomLine>
            </div>
        </div>
    )
}