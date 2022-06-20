import { FC } from "react";
import { default as Icon } from '../../../../../graphics/image.svg'
import { styles } from "../CreateNewProjectStyles";

const NoteImage: FC = () => {

    return <div className={ styles.note_icon } placeholder="add image">
    <img 
        src={ Icon } 
        className={ styles.note_icon }
        alt="add image"/>
</div> 
}

export default NoteImage