import { useEffect } from "react";
import styles from './styles/ViewError.module.css'
import { useAppDispatch } from "@/common/shared/lib";
import { statusesActions } from "../../../model/slice/statuses/slice";
import { isDenied, isError } from "../../../lib/helper/getStatuses";
import { Denied } from "@/notifications/entities/denied";
import { Error } from "@/notifications/entities/error";

export const ViewError = ({ error }) => {
    const dispatch = useAppDispatch();
    const status = error.status;
    const message = error.message;

    useEffect(() => {
        const handleUnload = () => {
            dispatch(statusesActions.removeError(error));
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    const NotificationComponent = isError(status)
        ? Error
        : isDenied(status)
            ? Denied
            : null;

    return NotificationComponent ? (
        <div className={styles.container}>
            <NotificationComponent message={message} />
        </div>

    ) : null;
}