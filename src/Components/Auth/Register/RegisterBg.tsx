import { FC } from "react";
import { default as BgImg } from '../../../graphics/loading.svg'
import { styles } from "./RegisterStyles";

const LoginBg: FC = () => {

    return <img 
        src={ BgImg } 
        alt="" 
        className={ styles.register_img }
    />
    
}

export default LoginBg