import { SmallServiceInput } from "@/services/passKeeper/entities/smallServiceInput/ui/SmallServiceInput"
import { useServiceContext } from "../lib/context/Context"
import { ServiceInputContext } from "@/services/passKeeper/shared/ui/serviceInput";

export const Service = () => {
    const pair = useServiceContext();
    return (
        <div>
            <ServiceInputContext.Provider value={pair}>
                <SmallServiceInput></SmallServiceInput>
            </ServiceInputContext.Provider>
        </div>
    )
}