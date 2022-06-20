import { FC } from "react";
import { styles } from "./CreateNewProjectStyles";
import NoteDraw from "./draw/NoteDraw";
import NoteImage from "./Images/NoteImage";
import TextNote from "./write/TextNote";

const CreateNewProject: FC = () => {

    return (
        <div className={ styles.new_project_wrap }>
            <TextNote />
            <NoteImage/>
            <NoteDraw/>
        </div>
    )
}

export default CreateNewProject