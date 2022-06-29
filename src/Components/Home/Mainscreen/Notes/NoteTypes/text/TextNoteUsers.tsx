import { FC } from "react";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteUsersProps {
    noteUsers: ( { id: string, users: string } )[]
}

const TextNoteUsers: FC<TextNoteUsersProps> 
= ( { noteUsers } ) => {

    return (
        <div className={ styles.add_new_users_wrap }>
            <div className={ styles.add_new_users }>
                {
                    noteUsers!.map( ( { users }: any ) => (
                        <div key={ users } className={ styles.note_user }/>
                    ) )
                }
                <div className={ styles.add_user }>+</div>
            </div>
        </div>
    )
}

export default TextNoteUsers