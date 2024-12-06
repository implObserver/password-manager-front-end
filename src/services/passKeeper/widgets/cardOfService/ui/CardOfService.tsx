import { Service } from "../components/service";
import { Password } from "../components/password";
import styles from './styles/CardOfServices.module.css'
import { useCustomState } from "@/common/shared/lib";
import { ServiceContext } from "../components/service/lib/context/Context";
import { PasswordContext } from "../components/password/lib/context/Context";
import { EditPair, EditPairContext } from "@/services/passKeeper/features/editPair";
import { DeletePair, DeletePairContext } from "@/services/passKeeper/features/deletePair";
import { EditButton } from "@/services/passKeeper/entities/editButton";
import { useSelector } from "react-redux";
import { selectPair } from "@/services/passKeeper/entities/pair/model/slice/openedPair/selectors";

export const Card = () => {
    const openedPair = useSelector(selectPair);

    const pair = useCustomState(openedPair);

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
}