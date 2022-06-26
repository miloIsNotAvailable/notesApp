import { FC } from "react";
import { Link } from "react-router-dom";
import { default as Icon } from '../../../../../graphics/brush.svg'
import { styles } from "../build/CreateNewProjectStyles";

const NoteDraw: FC = () => {

    return <Link
        to={ '/note_canvas' } 
        className={ styles.note_icon_wrap } 
        placeholder="draw"
    >
        <img 
            src={ Icon } 
            className={ styles.note_icon }
            alt="draw"/>
    </Link> 
}

export default NoteDraw