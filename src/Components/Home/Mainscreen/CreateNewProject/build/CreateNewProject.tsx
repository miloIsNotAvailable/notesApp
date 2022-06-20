import { FC } from "react";
import { noteInputState } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../store/hooks";
import { styles } from "./CreateNewProjectStyles";
import NoteDraw from "../draw/NoteDraw";
import NoteImage from "../Images/NoteImage";
import TextNote from "../write/TextNote";
import ChooseNoteType from "./chooseNoteType";

const CreateNewProject: FC = () => {

    const { content, type } = useAppSelector(
        ( state: noteInputState ) => state.getNoteType
     )

    console.log( content, type )

    return (
        <div className={ styles.new_project_wrap }
            style={ {
                minHeight: `${ content && type === 'text' || type === "image" ? '5rem' : 'var(--mainscreen-icon-size)' }`
            } }
        >
            <TextNote />
            <ChooseNoteType/>
        </div>
    )
}

export default CreateNewProject