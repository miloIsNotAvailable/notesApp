import { FC, lazy, Suspense } from "react";
import { styles } from "./LayoutStyles";

interface MenuLayoutOptionsProps {
    children: JSX.Element | JSX.Element[]
}

const MenuOptionsLayout: FC<MenuLayoutOptionsProps> 
= ( { children } ) => {

    return (
        <div className={ styles.menu_option }>
            { children }
        </div>
    )
}

export default MenuOptionsLayout