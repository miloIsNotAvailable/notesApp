import { FC } from "react";
import { setNewTheme } from "../../../../../store/Home/createNewTheme";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./ThemeStyles";

const CreateNewTheme: FC = () => {

    const dispatch = useAppDispatch()

    const handleCreate: () => void = () => {

        dispatch( setNewTheme( { create: true } ) )
    }

    return (
        <div className={ styles.new_theme }>
            <div>
                create new theme
            </div>
            <div 
                className={ styles.new_theme_add }
                onClick={ handleCreate }
            >
                +
            </div>
        </div>
    )
}

export default CreateNewTheme