import { FC } from "react";
import { useData } from "../../../../../../contexts/HomeContext";
import { useGetNewUsersMutation } from "../../../../../../store/apis/getPosts";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteUsersProps {
    noteUsers: ( { id: string, users: string } )[]
    noteId: string
}

const UPDATE_USERS = `
mutation updateUsers( $id: String, $noteId:String, $username:String ) {
    updateUsers(  input:{
      id:$id, 
      username:$username,
        noteId: $noteId
    } ) {
      id
      username
      noteId
    }
  }
`

const TextNoteUsers: FC<TextNoteUsersProps> 
= ( { 
    noteUsers, 
    noteId 
} ) => {

    const [ getNewUsers, { data, isLoading } ] = useGetNewUsersMutation()
    const { id, username } = useData()

    const handleClick: () => void = () => {
        getNewUsers( {
            body: UPDATE_USERS, 
            variables: {
                noteId,
                id,
                username
            }
        } )
    }

    return (
        <div className={ styles.add_new_users_wrap }>
            <div className={ styles.add_new_users }>
                {
                    noteUsers!.map( ( { users }: any ) => (
                        <div key={ users } className={ styles.note_user }/>
                    ) )
                }
                <div className={ styles.add_user }
                    // onClick={ handleClick }
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default TextNoteUsers