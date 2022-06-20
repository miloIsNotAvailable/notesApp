import { FC } from "react";
import { styles } from "./NoteImageStyles";

const ImageNoteInput: FC = () => {

    return (
        <div className={ styles.img_input_wrap }>
            <input 
                type={ "file" } 
                className={ styles.write_input }
                placeholder={ "+" }/>
            <div className={ styles.img_input_text }>
                { `+` }
            </div>
        </div>
    )
}

export default ImageNoteInput