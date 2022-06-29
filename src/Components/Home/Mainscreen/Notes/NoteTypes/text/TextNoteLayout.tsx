import { FC, useEffect } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { useLazyQuery } from "../../../../../../hooks/graphql/useLazyQuery";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import { getPosts, useGetAllPostsQuery } from "../../../../../../store/apis/getPosts";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch } from "../../../../../../store/hooks";
import { styles } from "./TextNoteLayoutStyles";
import TextNoteTitle from "./TextNoteTitle";

interface TextNoteLayoutProps {
    content: string
    title: string
    loading: boolean
    noteId: string
    noteUsers: ( { id: string, users: string } )[]
}

const TextNoteLayout: FC<Partial<TextNoteLayoutProps>> 
= ( { 
    content="", 
    loading, 
    title="", 
    noteId, 
    noteUsers=[]
} ) => {

    const dispatch = useAppDispatch()

    const handleOpenModal: () => void = () => {
        dispatch( setNoteModalOpen( {
            open: true,
            content: content,
            title: title,
            id: noteId!,
            users: ""
        } ) ) 
    }

    if ( loading ) return (
        <div className={ styles.text_layout }
        style={ { 
            backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ],
            width: `${ Math.floor( Math.random() * 75 + 10 ) }ch`,
            maxWidth: `${ Math.floor( Math.random() * 75 + 10 ) }ch`
        } }>
        <div className={ styles.text_note_loading }></div>
    </div>
    )

    return (
        <div className={ styles.text_layout }
        onClick={ handleOpenModal }
            style={ { 
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ]                
            } }>
            <TextNoteTitle title={ title } noteId={ noteId! }/>
            <p>{ content }</p>
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
        </div>
    )
}

export default TextNoteLayout