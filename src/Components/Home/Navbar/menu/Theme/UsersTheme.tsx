import { FC } from "react";
import { styles } from "./ThemeStyles";

interface UsersThemeProps {
    title: string
}

const UsersTheme: FC<UsersThemeProps> = ( { title } ) => {

    return (
        <div className={ styles.new_theme }>
            <div>
               { title }
            </div>
            <div 
                className={ styles.new_theme_add }
            >
                +
            </div>
        </div>
    )
}

export default UsersTheme