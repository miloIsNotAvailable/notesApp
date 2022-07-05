import { FC, useRef, useState } from "react";
import { setNewNotesToTheme } from "../../../../../store/Home/addNotesToTheme";
import { setThemeName } from "../../../../../store/Home/geThemeName";
import { setThemeID } from "../../../../../store/Home/getThemeID";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./ThemeStyles";

interface UsersThemeProps {
    title: string
    id: string
}

const FILTER_NOTES = `
mutation getFilteredNotes ( $title: String ){
    getFilterNotes( title:$title ){
      title
    }
  }`

const UsersTheme: FC<UsersThemeProps> = ( { title, id } ) => {

    const [ open, setOpen ] = useState<boolean>( false )
    const openRef = useRef<boolean>( false )

    const dispatch = useAppDispatch()
    const handleAddNewNotes: () => void = () => {
        openRef.current = !openRef.current
        setOpen( !open )
        dispatch( setNewNotesToTheme( {
            add: openRef.current
        } ) )

        dispatch( setThemeID( { id } ) )
    }

    const handleSelectTitle: () => void = () => {
        dispatch( setThemeName( { title } ) )
        title === 'all' && dispatch( setThemeName( { title: '' } ) )
    } 

    return (
        <div className={ styles.new_theme } key={ id }>
            <div onClick={ handleSelectTitle }>
               { title }
            </div>
            {
                title !== 'all' &&
                <div 
                    className={ styles.new_theme_add }
                    onClick={ handleAddNewNotes }
                    style={ {
                        transform: `${ open ? 'rotate(45deg)' : 'rotate(0)' }`
                    } }
                >
                    +
                </div>
            }
        </div>
    )
}

export default UsersTheme