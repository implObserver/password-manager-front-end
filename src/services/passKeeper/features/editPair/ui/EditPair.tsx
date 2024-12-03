import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";
import { useEditPairContext } from "../lib/context/Context";
import { EditButton } from "@/services/passKeeper/entities/editButton";
import { editPair } from "@/services/passKeeper/entities/pair";

export const EditPair = () => {
    const isLoading = useCustomState(false);
    const dispatch = useAppDispatch();
    const pair = useEditPairContext();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        const data = pair.getState();
        if (data.service.length > 0) {
            if (data.password.length > 0) {
                isLoading.setState(true);
                await dispatch(editPair(pair.getState()));
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