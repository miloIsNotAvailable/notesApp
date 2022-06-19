import { useEffect } from "@storybook/addons";
import { FC, lazy, Suspense, SVGProps, useRef } from "react";
import { styles } from "./LayoutStyles";

interface MenuLayoutOptionsProps {
    children: JSX.Element | JSX.Element[] | string | string[]
    svgPath?: string
}

const MenuOptionsLayout: FC<MenuLayoutOptionsProps> 
= ( { children, svgPath } ) => {


    return (
        <div className={ styles.menu_option }>
            { children }
        </div>
    )
}

export default MenuOptionsLayout