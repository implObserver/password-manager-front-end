export const generatePassword = (settings: Settings) => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characterSet = '';
    if (settings.customChars) {
        characterSet += settings.customChars;
    } else {
        if (settings.useUppercase) characterSet += upperCaseLetters;
        if (settings.useLowerCase) characterSet += lowerCaseLetters;
        if (settings.useNumbers) characterSet += numbers;
        if (settings.useSpecialChars) characterSet += specialChars;
    }
    if (characterSet.length === 0) {
        alert('Необходимо выбрать хотя бы один тип символов для генерации пароля.');
        throw new Error('Необходимо выбрать хотя бы один тип символов для генерации пароля.');
    }

    let password = '';
    for (let i = 0; i < settings.length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}