import { FC } from "react";
import { Link } from "react-router-dom";
import { default as GoBackIcon } from '../../../../../../../graphics/back.svg'
import { styles } from "../build/NoteCanvasStyles";

const GoBack: FC = () => {

    return (
        <Link to="/home" className={ styles.note_go_back }>
            <img src={ GoBackIcon } alt=""/>
        </Link>
    )
}

export default GoBack