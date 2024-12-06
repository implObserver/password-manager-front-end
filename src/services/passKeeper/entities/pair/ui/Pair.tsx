import { Link } from 'react-router-dom';
import { usePairContext } from '../lib';
import styles from './styles/Pair.module.css'
export const Pair = () => {
    const context = usePairContext();
    console.log(context.id)
    return (
        <Link
            className={styles.link}
            state={context}
            to={`/service/${context.service}`}>
            <div className={styles.pair}>
                <div className={styles.service}>
                    {context.service}
                </div>
                <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}