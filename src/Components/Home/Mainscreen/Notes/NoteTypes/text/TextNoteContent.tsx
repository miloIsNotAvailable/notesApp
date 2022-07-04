import { FC } from "react";
import { getNewNotesToThemeState } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteContentProps {
    content: string
    title: string
    noteId: string
    type: string
}

const TextNoteContent: FC<TextNoteContentProps> 
= ( { content="", title, noteId, type } ) => {

    const dispatch = useAppDispatch()

    const addNoteToTheme = useAppSelector( 
        ( state: getNewNotesToThemeState ) => state.getNewNoteToTheme.add
     )

    const handleOpenModal: () => void = () => {
        if( addNoteToTheme ) return
        dispatch( setNoteModalOpen( {
            open: true,
            content: content,
            title: title,
            id: noteId!,
            users: "",
            type
        } ) ) 
    }

    return (
        <div className={ styles.note_img_wrap }>
            { 
                type !== "text" ?
                <div 
                    className={ styles.note_img_wrap }
                    onClick={ handleOpenModal }
                >
                    <img 
                        src={ content } 
                        alt=""
                        className={ styles.note_img }
                    />
                </div> :
                <p onClick={ handleOpenModal }>
                    { content }
                </p>
            }
        </div>
    )
}

export default TextNoteContent