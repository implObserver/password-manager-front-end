import styles from './styles/Dropdown.module.css'
import { useDropdownContext } from '../lib/context/Context.';
import { useEffect, useRef } from 'react';

export const Dropdown = ({ children }) => {
    const status = useDropdownContext();

    const endOfListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (endOfListRef.current) {
            setTimeout(() => {
                endOfListRef.current.scrollIntoView({ behavior: "smooth" });
            }, 150);
        }
    }, [status]);

    return (
        <div ref={endOfListRef} className={styles.dropdown}>
            <div className={`
                ${styles.content} 
                ${status.state ? styles.open : ''}
                ${status.margin ? styles.margin : ''}`}
            >
                {children}
            </div>
        </div>
    )
}