import styles from './styles/Header.module.css'
import { SecondSectionOfHeader } from '@/structures/widgets/secondSectionOfHeader'
import { FirstSectionOfHeader } from '@/structures/widgets/firstSectionOfHeader'
import { Line } from '@/common/shared/ui/line'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <FirstSectionOfHeader></FirstSectionOfHeader>
                <SecondSectionOfHeader></SecondSectionOfHeader>
            </div>
            <Line text={''}></Line>
        </div>
    )
}