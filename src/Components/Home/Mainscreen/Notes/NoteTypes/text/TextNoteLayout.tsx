import { FC } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteLayoutProps {
    text: string
    loading: boolean
}

const TextNoteLayout: FC<TextNoteLayoutProps> 
= ( { text, loading } ) => {

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
            <p>{ text }</p>
        </div>
    )
}

export default TextNoteLayout