import { FC } from "react";
import { default as Icon } from '../../../../../graphics/image.svg'
import { NoteTypeInterface } from "../../../../../interfaces/homeInterfaces/homeTypes";
import { styles } from "../build/CreateNewProjectStyles";

const NoteImage: FC<NoteTypeInterface> 
= ( { onClick, selected } ) => {

    return <div 
        className={ styles.note_icon_wrap } 
        placeholder="add image"
        onClick={ onClick }  
        style={ selected === 'image' ? 
        { backgroundColor: 'var(--grey)' } 
        : {} 
    }
    >
    <img 
        src={ Icon } 
        className={ styles.note_icon }
        alt="add image"/>
</div> 
}

export default NoteImage