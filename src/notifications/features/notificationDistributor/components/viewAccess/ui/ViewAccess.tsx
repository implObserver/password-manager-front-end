import { useEffect } from "react";
import styles from './styles/ViewAccess.module.css'
import { useAppDispatch } from "@/common/shared/lib";
import { statusesActions } from "../../../model/slice/statuses/slice";
import { isAccess } from "../../../lib/helper/getStatuses";
import { Access } from "@/notifications/entities/access";


export const ViewAccess = ({ access }) => {
    const dispatch = useAppDispatch();
    const status = access.status;
    const message = access.message;

    useEffect(() => {
        const handleUnload = () => {
            dispatch(statusesActions.removeAccess(access));
        };
        window.addEventListener('beforeunload', handleUnload);
        setTimeout(() => {
            dispatch(statusesActions.removeAccess(access));
        }, 5000);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    const NotificationComponent = isAccess(status)
        ? Access
        : null;

    return NotificationComponent ? (
        <div className={styles.container}>
            <NotificationComponent message={message} />
        </div>

    ) : null;
}