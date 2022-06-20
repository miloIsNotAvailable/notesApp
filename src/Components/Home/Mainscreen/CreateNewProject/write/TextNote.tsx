import { FC } from "react";
import { styles } from "./WriteStyles";

const TextNote: FC = () => {

    return <div 
        contentEditable
        className={ styles.write_input } 
        placeholder={ "create new note..." }
    />
}

export default TextNote