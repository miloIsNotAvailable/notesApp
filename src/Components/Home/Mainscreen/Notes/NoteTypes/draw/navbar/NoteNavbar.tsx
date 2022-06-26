import { FC } from "react";
import { styles } from "../build/NoteCanvasStyles";
import ColorPicker from "./ColorPicker";
import GoBack from "./goBack";

const NoteNavbar: FC = () => {

    return (
        <div className={ styles.note_navbar }>
            <GoBack/>
            <div className={ styles.navbar_middle }>
                <ColorPicker/>
            </div>
        </div>
    )
}

export default NoteNavbar