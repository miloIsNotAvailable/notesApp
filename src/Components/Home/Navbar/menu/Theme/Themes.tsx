import { FC } from "react";
import CreateNewTheme from "./CreateNewTheme";
import UsersTheme from "./UsersTheme";
import UserThemes from "./UserThemes";

const Themes: FC = () => {

    return (
        <div>
            <CreateNewTheme/>
            <UserThemes/>
            {
                Array(4).fill( { title: 'lorem' } )
                .map( ( { title } ) => (
                    <UsersTheme title={ title } />
                ) )
            }
        </div>
    )
}

export default Themes