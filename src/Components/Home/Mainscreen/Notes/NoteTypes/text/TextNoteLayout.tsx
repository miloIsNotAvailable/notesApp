import { FC, useEffect, useState } from "react";
import { colors } from "../../../../../../constants/homeConstants";
import { useLazyQuery } from "../../../../../../hooks/graphql/useLazyQuery";
import { useQuery } from "../../../../../../hooks/graphql/useQuery";
import { getNewNotesToThemeState, getThemeIDState } from "../../../../../../interfaces/reduxInterfaces/Home/homeReduxInterfaces";
import { getPosts, useAddThemeToNoteMutation, useGetAllPostsQuery } from "../../../../../../store/apis/getPosts";
import { setNoteModalOpen } from "../../../../../../store/Home/noteModalOpen";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import TextNoteContent from "./TextNoteContent";
import { styles } from "./TextNoteLayoutStyles";
import TextNoteTitle from "./TextNoteTitle";
import TextNoteUsers from "./TextNoteUsers";
import { default as CheckMarkIcon } from '../../../../../../graphics/checkMarkIcon.svg'

const NEW_NOTE_THEME = `
mutation newNoteTheme( $id:String, $theme_id:String ){
    newNoteTheme( id:$id, theme_id:$theme_id ){
      id
      theme_id
    }
  }  
`

interface TextNoteLayoutProps {
    content: string
    title: string
    loading: boolean
    noteId: string
    noteUsers: ( { id: string, users: string } )[]
    type: string
    theme?: any
}

const TextNoteLayout: FC<Partial<TextNoteLayoutProps>> 
= ( { 
    content="", 
    loading, 
    title="", 
    noteId, 
    noteUsers=[],
    type="",
    theme
} ) => {

    const addNoteToTheme = useAppSelector( 
        ( state: getNewNotesToThemeState ) => state.getNewNoteToTheme.add
     )
    const themeID = useAppSelector( 
        ( state: getThemeIDState )   => state.getThemeID.id
    )

    const [ setNewNoteTheme, { data, isLoading } ] = useAddThemeToNoteMutation()

    const [ isAdded, setIsAdded ] = useState<boolean>( false )

    const handleAddToNewChannel: <T=any>(  
        v: any 
    ) => void = ( v ) => {
        if( !addNoteToTheme ) return
        setIsAdded( true )
        !isAdded && setNewNoteTheme( {
            body: NEW_NOTE_THEME,
            variables: {
                id: noteId!, 
                theme_id: themeID
            }
        } )
        console.log( { ...v, themeID } )
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
            style={ { 
                backgroundColor: colors[ Math.floor( Math.random() * colors.length ) ]                
            } }
            onClick={ () => handleAddToNewChannel<Partial<TextNoteLayoutProps>>( { 
                content,
                noteId,
                noteUsers,
                title,
                type
             } ) }
        >
            {
                addNoteToTheme && isAdded &&
                <div className={ styles.add_theme_accept }>
                    <img src={ CheckMarkIcon } />
                </div>
            }
            <TextNoteTitle 
                title={ title } 
                noteId={ noteId! }
                theme={ theme }
            />
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