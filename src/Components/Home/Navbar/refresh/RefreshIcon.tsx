import { FC, useEffect, useState } from "react";
import { default as Icon } from '../../../../graphics/refresh.svg'
import { styles } from "./RefreshStyles";
import { motion } from "framer-motion";

const RefreshIcon: FC = () => {

    const [ rotate, setRotate ] = useState( false )

    return <motion.img 
        src={ Icon } 
        alt=""
        className={ styles.refresh_icon }
        onClick={ () => setRotate( true ) }
        onAnimationEnd={ () => setRotate( false ) }
        style={ rotate ? {
            animation: 'rotate 1s ease'
        }: {} }/>
}

export default RefreshIcon