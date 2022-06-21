import { FC } from "react";
import { styles } from "./CreateNewProjectStyles";
import ChooseNoteType from "./chooseNoteType";
import InputType from "./InputType";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import Submit from "../submit";

const CreateNewProject: FC = () => {

    const { content, type } = useNoteType()

    return (
        <div className={ styles.new_project }>
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
                 <Submit/>
                <ChooseNoteType/>
            </div>
        </div>
    )
}

export default CreateNewProject
