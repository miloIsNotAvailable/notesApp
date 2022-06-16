import { FC } from "react";
import { default as BgImg } from '../../../graphics/loading.svg'
import { styles } from "./FormStyles";

const Bg: FC = () => {

    return <img 
        src={ BgImg } 
        alt="" 
        className={ styles.bg_img }
    />
    
}

export default Bg