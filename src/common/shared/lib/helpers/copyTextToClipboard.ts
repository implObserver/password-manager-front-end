export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        alert('Текст скопирован в буфер обмена!');
    } catch (err) {
        console.error('Ошибка при копировании текста: ', err);
    }
};