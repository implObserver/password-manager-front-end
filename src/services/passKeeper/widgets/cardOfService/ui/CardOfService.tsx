import { Service } from "../components/service";
import { Password } from "../components/password";
import styles from './styles/CardOfServices.module.css'
import { useCustomState } from "@/common/shared/lib";
import { useLocation } from "react-router-dom";
import { ServiceContext } from "../components/service/lib/context/Context";
import { PasswordContext } from "../components/password/lib/context/Context";
import { EditPair, EditPairContext } from "@/services/passKeeper/features/editPair";
import { DeletePair, DeletePairContext } from "@/services/passKeeper/features/deletePair";
import { EditButton } from "@/services/passKeeper/entities/editButton";

export const Card = () => {
    const location = useLocation();
    const context = location.state as Pair;

    const pair = useCustomState({
        id: context.id,
        service: context.service,
        password: context.password,
        isLocked: true,
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const clickHandler = () => {
        const data = pair.getState();
        pair.setState({
            id: data.id,
            service: data.service,
            password: data.password,
            isLocked: false,
        })
    }

    const cancel = () => {
        pair.setState({
            id: context.id,
            service: context.service,
            password: context.password,
            isLocked: true,
        })
    }

    return (
        <form onSubmit={submitHandler} className={styles.card}>
            <div className={styles.form_group}>
                <div className={styles.service_section}>
                    <ServiceContext.Provider value={pair}>
                        <Service />
                    </ServiceContext.Provider>
                </div>

                <div className={styles.password_section}>
                    <PasswordContext.Provider value={pair}>
                        <Password />
                    </PasswordContext.Provider>
                </div>

                <div className={styles.buttons}>
                    {pair.getState().isLocked
                        ?
                        <div onClick={clickHandler}>
                            <EditButton name={'Edit'} />
                        </div>
                        :
                        <>
                            <EditPairContext.Provider value={pair}>
                                <EditPair></EditPair>
                            </EditPairContext.Provider>
                            <div onClick={cancel}>
                                <EditButton name={'Cancel'} />
                            </div>
                        </>

                    }

                    <DeletePairContext.Provider value={pair}>
                        <DeletePair></DeletePair>
                    </DeletePairContext.Provider>
                </div>
            </div>
        </form>
    )
}