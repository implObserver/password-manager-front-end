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
import { CopyText } from "@/common/features/copyText";
import { useSelector } from "react-redux";
import { selectPairs } from "@/services/passKeeper/entities/pair";
import { useEffect } from "react";

export const Card = () => {
    const location = useLocation();
    const context = location.state as Pair;
    if (context) {
        const pairs = useSelector(selectPairs);
        const index = pairs.findIndex(pair => pair.id === context.id);
        const openedPair = pairs[index];

        const pair = useCustomState({
            id: openedPair.id,
            service: openedPair.service,
            password: openedPair.password,
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
                id: openedPair.id,
                service: openedPair.service,
                password: openedPair.password,
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
    } else {
        return (
            <div>
                Не существующий сервис
            </div>
        )
    }
}