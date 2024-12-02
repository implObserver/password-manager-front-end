import { Hamburger, HamburgerContext } from "@/common/shared/ui/hamburger"
import { useTriggerContext } from "../lib/context/Context";
import styles from './styles/HamburgerTrigger.module.css'

export const HamburgerTrigger = () => {
    const context = useTriggerContext();

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        context.toggle();
    }

    return (
        <div className={styles.trigger__hamburger} onClick={handleClick}>
            <HamburgerContext.Provider value={context.getState()}>
                <Hamburger></Hamburger>
            </HamburgerContext.Provider>
        </div>
    )
}