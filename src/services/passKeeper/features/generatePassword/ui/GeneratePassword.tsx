import { GenerateButton } from '@/services/passKeeper/entities/generateButton';
import { generatePassword } from '@/services/passKeeper/shared/lib';
import { useGeneratorFormContext } from '@/services/passKeeper/entities/generatorForm';
import { usePasswordInputContext } from '@/services/passKeeper/shared/ui/passwordInput';

export const GeneratePassword = () => {
    const pair = usePasswordInputContext();
    const settings = useGeneratorFormContext();
    const clickHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const password = generatePassword(settings.getState());
        const service = pair.getState().service;
        pair.setState({
            service,
            password,
        })
    }
    return (
        <div onClick={clickHandler}>
            <GenerateButton></GenerateButton>
        </div>
    )
}