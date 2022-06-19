import { FC } from "react";
import { default as Icon } from '../../../../../graphics/image.svg'
import { styles } from "../CreateNewProjectStyles";

const NoteImage: FC = () => {

    return <img src={ Icon } className={ styles.note_icon }/>
}

export default NoteImage