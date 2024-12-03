import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { addPair } from "@/services/passKeeper/entities/pair/model/slice/thunks/post/addPair";
import { useAddPairContext } from "../lib/context/Context";
import { SaveButton } from "@/services/passKeeper/entities/saveButton/ui/SaveButton";
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";

export const AddPassword = () => {
    const isLoading = useCustomState(false);
    const dispatch = useAppDispatch();
    const pair = useAddPairContext();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        isLoading.setState(true);

        await dispatch(addPair(pair.getState()));
        pair.setState({
            service: '',
            password: '',
        });

        isLoading.setState(false);
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