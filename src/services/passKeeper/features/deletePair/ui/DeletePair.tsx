import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";
import { DeleteButton } from "@/services/passKeeper/entities/deleteButton";
import { useDeletePairContext } from "../lib/context/Context";
import { deletePair } from "@/services/passKeeper/entities/pair";
import { useNavigate } from "react-router-dom";

export const DeletePair = () => {
    const isLoading = useCustomState(false);
    const dispatch = useAppDispatch();
    const pair = useDeletePairContext();
    const navigate = useNavigate();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        isLoading.setState(true);

        const resultAction = await dispatch(deletePair(pair.getState()));

        isLoading.setState(false);
        const response: EmulateResponse = resultAction.payload as EmulateResponse;
        if (!response.isError) {
            navigate('/');
        }
    }

    return (
        <div onClick={submitHandler} style={{ position: 'relative' }}>
            {isLoading.getState() ? (
                <SpinnerLoader />
            ) : (
                <DeleteButton />
            )}
        </div>
    );
}