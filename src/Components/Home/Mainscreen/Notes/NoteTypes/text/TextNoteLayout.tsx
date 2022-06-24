import { FC } from "react";
import { colors } from "../../../../../../constants/homeConstants";
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
            style={ { 
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ]
            } }>
            <TextNoteTitle title={ title } noteId={ noteId }/>
            <p>{ text }</p>
        </div>
    )
}

export default TextNoteLayout