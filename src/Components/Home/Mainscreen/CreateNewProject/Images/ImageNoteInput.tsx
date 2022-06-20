import { ChangeEvent, DragEvent, FC } from "react";
import { styles } from "./NoteImageStyles";
import { useOpenImage } from "./useOpenImage";

const ImageNoteInput: FC = () => {

    const handleOpen = useOpenImage()

    return (
        <div className={ styles.img_input_wrap }
        onDrop={ handleOpen }>
            <input 
                type={ "file" } 
                className={ styles.write_input }
                placeholder={ "+" }
                onChange={ handleOpen }/>
            <div className={ styles.img_input_text }>
                { `+` }
            </div>
        </div>
    )
}

export default ImageNoteInput