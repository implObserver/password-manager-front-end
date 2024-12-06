import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";
import { useEditPairContext } from "../lib/context/Context";
import { EditButton } from "@/services/passKeeper/entities/editButton";
import { editPair, openedPairActions } from "@/services/passKeeper/entities/pair";

export const EditPair = () => {
    const isLoading = useCustomState(false);
    const dispatch = useAppDispatch();
    const pair = useEditPairContext();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        const data = pair.getState();
        if (data.service.length > 0) {
            if (data.password.length > 0) {
                isLoading.setState(true);
                const newPair: Pair = {
                    id: data.id,
                    service: data.service,
                    password: data.password,
                    isLocked: true,
                }
                await dispatch(editPair(newPair));
                dispatch(openedPairActions.openPair(newPair));
                pair.setState(newPair);
                isLoading.setState(false);
            }
        }
    }

    return (
        <div onClick={submitHandler} style={{ position: 'relative' }}>
            {isLoading.getState() ? (
                <SpinnerLoader />
            ) : (
                <EditButton name={'Save'} />
            )}
        </div>
    );
}