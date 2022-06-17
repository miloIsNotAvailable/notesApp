import { FC, useState } from "react";
import { default as Icon } from '../../../../graphics/refresh.svg'
import { styles } from "./RefreshStyles";
import { motion } from "framer-motion";

const RefreshIcon: FC = () => {

    const [ rotate, setRotate ] = useState( '0deg' )

    return <motion.img 
        src={ Icon } 
        alt=""
        className={ styles.refresh_icon }
        whileFocus={ {
            transform: 'rotate(360deg)'
        } }
        tabIndex={ 1 }/>
}

export default RefreshIcon