import { FC } from "react";
import { default as BgImg } from '../../../graphics/loading.svg'
import { styles } from "./LoginStyles";

const LoginBg: FC = () => {

    return <img 
        src={ BgImg } 
        alt="" 
        className={ styles.login_img }
    />
    
}

export default LoginBg