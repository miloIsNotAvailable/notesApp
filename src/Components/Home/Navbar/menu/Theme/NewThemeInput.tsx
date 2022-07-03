import { FC, useRef } from "react";
import { setNewTheme } from "../../../../../store/Home/createNewTheme";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./ThemeStyles";

const NewThemeInput: FC = () => {

    const dispatch = useAppDispatch()
    const handleCancel: () => void = () => {

        dispatch( setNewTheme( { create: false } ) )
    }

    const inputRef = useRef<HTMLInputElement>( null )

    return (
        <div className={ styles.new_theme_input_display }>
            <div className={ styles.new_theme_input_wrap }>
                <input 
                    ref={ inputRef }
                    className={ styles.new_theme_input }
                    placeholder={ 'theme name' }
                />
            </div>
            <div 
                className={ styles.new_theme_create }
            >
                ✔
            </div>
            <div 
                className={ styles.new_theme_esc }
                onClick={ handleCancel }
            >
                +
            </div>
        </div>
    )
}

export default NewThemeInput