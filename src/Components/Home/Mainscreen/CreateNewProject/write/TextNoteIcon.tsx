import { FC } from "react";
import { default as Icon } from '../../../../../graphics/pencil.svg'
import { NoteTypeInterface } from "../../../../../interfaces/homeInterfaces/homeTypes";
import { styles } from "../build/CreateNewProjectStyles";

const TextNoteIcon: FC<NoteTypeInterface> 
= ( { onClick, selected } ) => {

    return <div 
        className={ styles.note_icon_wrap } 
        placeholder="text note"
        onClick={ onClick }  
        style={ selected === 'text' ? 
            { backgroundColor: 'var(--grey)' } 
            : {} 
        }
    >
    <img 
        src={ Icon } 
        className={ styles.note_icon }
        alt="text note"/>
</div> 
}

export default TextNoteIcon