import { useSelector } from "react-redux";
import styles from './styles/NotificationDistributor.module.css'
import { selectStatuses } from "../model/slice/statuses/selectors";
import { ViewError } from "../components/viewError";
import { ViewAccess } from "../components/viewAccess";

export const NotificationDistributor = ({ id }) => {
    const statuses = useSelector(selectStatuses);
    const errors = statuses.errors;
    const accesses = statuses.accesses;

    let NotificationComponent: React.ReactElement;
    console.log(errors)
    errors.forEach(error => {
        if (id === error.id) {
            NotificationComponent = <div className={styles.container}>
                <ViewError error={error}></ViewError>
            </div>
        }
    })

    accesses.forEach(access => {
        if (id === access.id) {
            NotificationComponent = <div className={styles.container}>
                <ViewAccess access={access}></ViewAccess>
            </div>
        }
    })
    return NotificationComponent;
};