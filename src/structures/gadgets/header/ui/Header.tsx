import { Logo } from '@/common/entities/logo'
import styles from './styles/Header.module.css'
import { SecondSectionOfHeader } from '@/structures/widgets/secondSectionOfHeader'
import { FirstSectionOfHeader } from '@/structures/widgets/firstSectionOfHeader'
import { Line } from '@/common/shared/ui/line'

export const Header = () => {
    return (
        <div className={styles.header}>
            <FirstSectionOfHeader></FirstSectionOfHeader>
            <SecondSectionOfHeader></SecondSectionOfHeader>
            <Line text={''}></Line>
        </div>
    )
}