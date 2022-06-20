import { FC } from "react";
import { default as Icon } from '../../../../../graphics/brush.svg'
import { styles } from "../build/CreateNewProjectStyles";

const NoteDraw: FC = () => {

    return <div 
        className={ styles.note_icon } 
        placeholder="draw"
    >
        <img 
            src={ Icon } 
            className={ styles.note_icon }
            alt="draw"/>
    </div> 
}

export default NoteDraw