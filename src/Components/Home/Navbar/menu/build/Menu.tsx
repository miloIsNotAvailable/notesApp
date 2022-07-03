import { FC, useState } from "react";
import { default as MenuIcon } from '../../../../../graphics/menu.svg'
import MenuBody from "./MenuBody";
import { styles } from "./MenuStyles";

const Menu: FC = () => {

    const [ open, setOpen ] = useState<boolean>( false )

    return (
        <div className={ styles.menu_icon }>
            <img  
                src={ MenuIcon } 
                alt=""
                onClick={ () => setOpen( !open ) }
                />
            <MenuBody open={ open }/>
        </div>
    )
}

export default Menu