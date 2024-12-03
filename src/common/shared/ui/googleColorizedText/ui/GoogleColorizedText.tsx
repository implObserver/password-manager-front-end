export const GoogleColorizedText = ({word}) => {
    const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];
    return Array.from(word as string).map((char, index) => {
        const color = colors[index % colors.length];
        return (
            <span key={index} style={{ color }}>
                {char}
            </span>
        );
    });
};