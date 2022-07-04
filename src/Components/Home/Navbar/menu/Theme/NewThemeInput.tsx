import { FC, useRef } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import { v4 } from "../../../../../hooks/home/useUUID";
import { useGetNewThemeMutation } from "../../../../../store/apis/getPosts";
import { setNewTheme } from "../../../../../store/Home/createNewTheme";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./ThemeStyles";

const NEW_THEME = `
mutation newTheme($id:String, $theme_name:String, $user_id: String ){
    newTheme( id: $id, theme_name:$theme_name, user_id: $user_id ){
      id
      theme_name
      user_id
    }
  }
`

const NewThemeInput: FC = () => {

    const [ setGetNewTheme, { data, isLoading, isError } ] = useGetNewThemeMutation()

    const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>( null )
    
    const { id } = useData()

    const handleCreate: () => Promise<void> = async() => {
        
        if( !inputRef.current?.value.trim() ) return   

        await setGetNewTheme( {
            body: NEW_THEME, 
            variables: {
                id: v4(),
                theme_name: inputRef.current?.value.trim(),
                user_id: id
            } 
         } )

         if( !isError ) inputRef.current!.value = ''
    }

    const handleCancel: () => void = () => {
        dispatch( setNewTheme( { create: false } ) )
    }

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
                onClick={ handleCreate }
            >
                { isLoading ? '⌛' : '✔' }
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