import { FC } from "react";
import { styles } from "./NoteImageStyles";

const ImageNotInput: FC = () => {

    return <div 
    contentEditable
    className={ styles.write_input } 
    placeholder={ "+" }
/>
}

export default ImageNotInput