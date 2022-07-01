import { FC, useRef } from "react";
import { useData } from "../../../../../../contexts/HomeContext";
import { useGetNewUsersMutation } from "../../../../../../store/apis/getPosts";
import { setSearchModalOpen } from "../../../../../../store/Home/SearchBarOpen";
import { useAppDispatch } from "../../../../../../store/hooks";
import { styles } from "./TextNoteLayoutStyles";

interface TextNoteUsersProps {
    noteUsers: ( { id: string, users: string } )[]
    noteId: string
}

const TextNoteUsers: FC<TextNoteUsersProps> 
= ( { 
    noteUsers, 
    noteId 
} ) => {

    const openModalRef = useRef<HTMLDivElement | null>( null )

    const dispatch = useAppDispatch()

    const handleClick: () => void = () => {

        dispatch( setSearchModalOpen( {
            open: true,
            x: openModalRef.current!.getBoundingClientRect()!.left,
            y: openModalRef.current!.getBoundingClientRect()!.top,
            noteId: noteId
        } ) )
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
                    ref={ openModalRef }
                    onClick={ handleClick }
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default TextNoteUsers