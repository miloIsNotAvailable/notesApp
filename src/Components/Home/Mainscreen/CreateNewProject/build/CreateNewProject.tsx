import { FC } from "react";
import { noteInputState } from "../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { useAppSelector } from "../../../../../store/hooks";
import { styles } from "./CreateNewProjectStyles";
import NoteDraw from "../draw/NoteDraw";
import NoteImage from "../Images/NoteImage";
import TextNote from "../write/TextNote";
import ChooseNoteType from "./chooseNoteType";
import ImageNoteInput from "../Images/ImageNoteInput";
import InputType from "./InputType";

const CreateNewProject: FC = () => {

    const { content, type } = useAppSelector(
        ( state: noteInputState ) => state.getNoteType
     )

    return (
        <div className={ styles.new_project_wrap }
            style={ {
                minHeight: `${ 
                    content && type === 'text' || 
                    type === "image" ? 
                    '5rem' : 'var(--mainscreen-icon-size)' 
                }`
            } }
        >
            <InputType content={ content } type={ type }/>
            <ChooseNoteType/>
        </div>
    )
}

export default CreateNewProject