import { FC } from "react";
import { styles } from "./WriteStyles";

const TextNote: FC = () => {

    return <input 
        className={ styles.write_input } 
        placeholder={ "create new note..." }
    />
}

export default TextNote