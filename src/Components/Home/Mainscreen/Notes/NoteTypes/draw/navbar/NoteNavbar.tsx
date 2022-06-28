import { FC } from "react";
import { styles } from "../build/NoteCanvasStyles";
import ChooseBrush from "./chooseBrush";
import ColorPicker from "./ColorPicker";
import GoBack from "./goBack";
import SaveButton from "./SaveButton";

const NoteNavbar: FC = () => {

    return (
        <div className={ styles.note_navbar }>
            <div className={  styles.navbar_left}>
                <GoBack/>
                <SaveButton/>
            </div>
            <div className={ styles.navbar_middle }>
                <ColorPicker/>
                <ChooseBrush/>
            </div>
        </div>
    )
}

export default NoteNavbar