import { FC, useRef, useState } from "react";
import { setNewNotesToTheme } from "../../../../../store/Home/addNotesToTheme";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./ThemeStyles";

interface UsersThemeProps {
    title: string
}

const UsersTheme: FC<UsersThemeProps> = ( { title } ) => {

    const [ open, setOpen ] = useState<boolean>( false )
    const openRef = useRef<boolean>( false )

    const dispatch = useAppDispatch()
    const handleAddNewNotes: () => void = () => {
        openRef.current = !openRef.current
        setOpen( !open )
        dispatch( setNewNotesToTheme( {
            add: openRef.current
        } ) )
    }

    return (
        <div className={ styles.new_theme }>
            <div>
               { title }
            </div>
            <div 
                className={ styles.new_theme_add }
                onClick={ handleAddNewNotes }
                style={ {
                    transform: `${ open ? 'rotate(45deg)' : 'rotate(0)' }`
                } }
            >
                +
            </div>
        </div>
    )
}

export default UsersTheme