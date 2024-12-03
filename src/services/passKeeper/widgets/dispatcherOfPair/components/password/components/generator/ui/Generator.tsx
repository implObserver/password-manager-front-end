import { ExternalReset, ExternalResetContext } from "@/common/features/externalReset";
import { useCustomState } from "@/common/shared/lib";
import { Dropdown, DropdownContext } from "@/common/shared/ui/dropdownElement"
import { GeneratorForm, GeneratorFormContext } from "@/services/passKeeper/entities/generatorForm";
import { GeneratePassword } from "@/services/passKeeper/features/generatePassword";

export const Generator = () => {
    const focus = useCustomState(false);
    const settings = useCustomState({
        length: 8,
        useUppercase: true,
        useLowerCase: true,
        useNumbers: true,
        useSpecialChars: false,
        customChars: '',
    })

    const dropdownContext: DropdownContextType = {
        state: focus.getState(),
        margin: false,
    }

    const clickHandler = () => {
        focus.setState(true);
    }

    const externalResetContext: ExternalResetContextType = {
        state: focus,
        index: `drodown`,
    }

    return (
        <div onClick={clickHandler}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <span>Сгенерировать пароль</span>
                    <DropdownContext.Provider value={dropdownContext}>
                        <Dropdown>
                            <GeneratorFormContext.Provider value={settings}>
                                <GeneratorForm></GeneratorForm>
                                <GeneratePassword></GeneratePassword>
                            </GeneratorFormContext.Provider>
                        </Dropdown>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}