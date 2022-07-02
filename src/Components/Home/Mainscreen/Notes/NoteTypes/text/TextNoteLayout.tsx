import { FC, useEffect } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { useLazyQuery } from "../../../../../../hooks/graphql/useLazyQuery";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import { getPosts, useGetAllPostsQuery } from "../../../../../../store/apis/getPosts";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch } from "../../../../../../store/hooks";
import TextNoteContent from "./TextNoteContent";
import { styles } from "./TextNoteLayoutStyles";
import TextNoteTitle from "./TextNoteTitle";
import TextNoteUsers from "./TextNoteUsers";

interface TextNoteLayoutProps {
    content: string
    title: string
    loading: boolean
    noteId: string
    noteUsers: ( { id: string, users: string } )[]
    type: string
}

const TextNoteLayout: FC<Partial<TextNoteLayoutProps>> 
= ( { 
    content="", 
    loading, 
    title="", 
    noteId, 
    noteUsers=[],
    type=""
} ) => {

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
            style={ { 
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ]                
            } }>
            <TextNoteTitle title={ title } noteId={ noteId! }/>
            <TextNoteContent 
                content={ content }
                noteId={ noteId! }
                title={ title }
                type={ type } 
            />
            <TextNoteUsers 
                noteUsers={ noteUsers } 
                noteId={ noteId! }
            />
        </div>
    )
}

export default TextNoteLayout