import { FC } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch } from "../../../../../../store/hooks";
import { styles } from "./TextNoteLayoutStyles";
import TextNoteTitle from "./TextNoteTitle";

interface TextNoteLayoutProps {
    text: string
    title: string
    loading: boolean
    noteId: string
}

const TextNoteLayout: FC<TextNoteLayoutProps> 
= ( { text, loading, title, noteId } ) => {

    const dispatch = useAppDispatch()

    const handleOpenModal: () => void = () => {
        dispatch( setNoteModalOpen( {
            open: true,
            content: text,
            title: title,
            id: noteId,
            users: ""
        } ) ) 
    }

    if ( loading ) return (
        <div className={ styles.text_layout }
        style={ { 
            backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ],
            width: `${ Math.floor( Math.random() * 75 + 10 ) }ch`,
            maxWidth: `${ Math.floor( Math.random() * 75 + 10 ) }ch`
        } }>
        <div className={ styles.text_note_loading }></div>
    </div>
    )

    return (
        <div className={ styles.text_layout }
        onClick={ handleOpenModal }
            style={ { 
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ]                
            } }>
            <TextNoteTitle title={ title } noteId={ noteId }/>
            <p>{ text }</p>
        </div>
    )
}

export default TextNoteLayout