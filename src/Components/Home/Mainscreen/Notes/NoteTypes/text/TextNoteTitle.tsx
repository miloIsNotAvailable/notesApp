import { FC, FormEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useData } from "../../../../../../contexts/HomeContext";
import { useMutation } from "../../../../../../hooks/graphql/useMutation";
import { styles } from "./TextNoteLayoutStyles";

const TITLE_MUTATION = `
mutation newTitle( $title:String, $id:String, $noteId: String ) {
    newTitle(title:$title, id:$id, noteId: $noteId) {
      title
      id
      noteId
    }
  }
`

interface TextNoteTitleProps {
    title: string
    noteId: string
    theme?: any
}

type Event = KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>
const isOnClick = ( e: Event ): 
e is MouseEvent<HTMLDivElement> => {
    const event = e as KeyboardEvent<HTMLDivElement>
    return event.key === 'Enter'
}

const TextNoteTitle: FC<TextNoteTitleProps> 
= ( { 
    title, 
    noteId,
    theme
} ) => {

    const [newTitle, setTitle] = useState<string>( title )
    const [editable, setEditable] = useState<boolean>( false )
    const titleRef = useRef<HTMLDivElement | null>( null )

    const [ { data, loading, error }, setNewTitle ] = useMutation()
    const { id } = useData()

    const editTitle: 
    ( e: KeyboardEvent<HTMLDivElement> ) => void
    = e => {

        e.currentTarget.contentEditable = "false"
        setTitle( e.currentTarget.innerText )

        setNewTitle( TITLE_MUTATION, {
            args: {
                title: newTitle,
                id: id,
                noteId: noteId
            }
        } )
    }
    
    return (
        <div className={ styles.text_layout_title_wrap }>
        <div 
            className={ styles.text_layout_title } 
            contentEditable={ editable }
            suppressContentEditableWarning={ true }
            tabIndex={ 3 }
            ref={ titleRef }
            onBlur={ () =>{ 
                setEditable( false ); 
                if(titleRef.current) titleRef.current.innerText = data?.newTitle?.title || title 
                
            } }
            onKeyDown={ e => e.key == 'Enter' && editTitle( e ) }  
            onInput={ e => setTitle( e.currentTarget.innerText ) }
        >
            { title }
            {
                theme && theme[0]?.theme_name &&
                <div className={ styles.text_layout_theme }>
                    { theme[0]?.theme_name }
                </div>
            }
        </div>
        <div 
            className={ styles.text_layout_edit } 
            onClick={ () => setEditable( true ) }
        >
        <div className={ styles.title_buttons }>
            edit
        </div>
        </div>
    </div>
    )
}

export default TextNoteTitle