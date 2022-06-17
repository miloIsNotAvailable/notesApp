import { FC } from "react";
import { default as MenuIcon } from '../../../../graphics/menu.svg'
import { styles } from "./MenuStyles";

const Menu: FC = () => {

    return (
        <div className={ styles.menu_icon }>
            <img  src={ MenuIcon } alt=""/>
        </div>
    )
}

export default Menu