import { ServiceInputContext } from "@/services/passKeeper/shared/ui/serviceInput";
import { useServiceContext } from "../lib/context/Context"
import { BigServiceInput } from "@/services/passKeeper/entities/bigServiceInput";

export const Service = () => {
    const pair = useServiceContext();
    return (
        <div>
            <ServiceInputContext.Provider value={pair}>
                <span>Имя сервиса:</span>
                <BigServiceInput lock={pair.getState().isLocked}></BigServiceInput>
            </ServiceInputContext.Provider>
        </div>
    )
}