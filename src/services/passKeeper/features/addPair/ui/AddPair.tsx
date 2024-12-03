import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { addPair } from "@/services/passKeeper/entities/pair/model/slice/thunks/post/addPair";
import { useAddPairContext } from "../lib/context/Context";
import { SaveButton } from "@/services/passKeeper/entities/saveButton/ui/SaveButton";
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";

export const AddPair = () => {
    const isLoading = useCustomState(false);
    const dispatch = useAppDispatch();
    const pair = useAddPairContext();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        const data = pair.getState();
        if (data.service.length > 0) {
            if (data.password.length > 0) {
                isLoading.setState(true);
                await dispatch(addPair(pair.getState()));
                isLoading.setState(false);
            }
        }
    }

    return (
        <div onClick={submitHandler} style={{ position: 'relative' }}>
            {isLoading.getState() ? (
                <SpinnerLoader />
            ) : (
                <SaveButton />
            )}
        </div>
    );
}