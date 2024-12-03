import { ServiceInput } from "@/services/passKeeper/entities/serviceInput/ui/ServiceInput"
import { useServiceContext } from "../lib/context/Context"
import { ServiceInputContext } from "@/services/passKeeper/entities/serviceInput/lib/context/Context";

export const Service = () => {
    const pair = useServiceContext();
    return (
        <div>
            <ServiceInputContext.Provider value={pair}>
                <ServiceInput></ServiceInput>
            </ServiceInputContext.Provider>
        </div>
    )
}