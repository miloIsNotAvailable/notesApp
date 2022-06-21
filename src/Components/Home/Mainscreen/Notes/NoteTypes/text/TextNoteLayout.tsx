import { FC } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteLayoutProps {
    text: string
}

const TextNoteLayout: FC<TextNoteLayoutProps> 
= ( { text } ) => {

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