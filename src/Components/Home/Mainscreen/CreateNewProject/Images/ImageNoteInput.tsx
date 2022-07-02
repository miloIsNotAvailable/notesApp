import { FC } from "react";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { styles } from "./NoteImageStyles";
import { useOpenImage } from "./useOpenImage";

const ImageNoteInput: FC = () => {

    const handleOpen = useOpenImage()
    const { content, type } = useNoteType()

    return (
        <div className={ styles.img_input_wrap }
        onDrop={ handleOpen }>
            <input 
                type={ "file" } 
                className={ styles.write_input }
                placeholder={ "+" }
                onChange={ handleOpen }/>
            <div className={ styles.img_input_text }>
                { !content ? `+` : 
                    type === 'image' && 
                    <img
                        className={ styles.img_preview } 
                        src={ content! } 
                        alt="added_img"
                    />
                }
                
                
            </div>
        </div>
    )
}

export default ImageNoteInput