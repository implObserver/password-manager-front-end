import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { addPair } from "@/services/passKeeper/entities/pair/model/slice/thunks/post/addPair";
import { useAddPairContext } from "../lib/context/Context";
import { SaveButton } from "@/services/passKeeper/entities/saveButton/ui/SaveButton";

export const AddPassword = () => {
    const dispatch = useAppDispatch();

    const pair = useAddPairContext();

    const submitHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        await dispatch(addPair(pair.getState()))
        pair.setState({
            service: '',
            password: '',
        })
    }

    return (
        <div onClick={submitHandler}>
            <SaveButton></SaveButton>
        </div>
    )
}