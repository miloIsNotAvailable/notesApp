import { FC } from "react";
import { styles } from "./CreateNewProjectStyles";
import NoteImage from "./Images/NoteImage";
import TextNote from "./write/TextNote";

const CreateNewProject: FC = () => {

    return (
        <div className={ styles.new_project_wrap }>
            <TextNote />
            <NoteImage/>
        </div>
    )
}

export default CreateNewProject