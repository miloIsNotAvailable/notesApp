import { FC } from "react";
import NoteTypes from "../NoteTypes/build/NoteTypes";
import { styles } from "./NoteStyles";

const Notes: FC = () => {

    return (
        <div className={ styles.notes_wrap }>
            <NoteTypes/>
        </div>
    )
}

export default Notes