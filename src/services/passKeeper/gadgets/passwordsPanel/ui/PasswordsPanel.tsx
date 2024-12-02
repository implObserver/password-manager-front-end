import { AddPassword } from "@/services/passKeeper/features/addPassword"
import { PaginationShowcaseOfPasswords } from "@/services/passKeeper/widgets/paginationShowcaseOfPasswords"
import { PasswordsHeader } from "@/services/passKeeper/widgets/passwordsPanelHeader"

export const PasswordsPanel = () => {
    return (
        <div>
            <PasswordsHeader></PasswordsHeader>
            <PaginationShowcaseOfPasswords></PaginationShowcaseOfPasswords>
            <AddPassword></AddPassword>
        </div>
    )
}