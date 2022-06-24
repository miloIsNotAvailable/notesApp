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
}

const TextNoteTitle: FC<TextNoteTitleProps> = ( { title, noteId } ) => {

    const [newTitle, setTitle] = useState<string>( title )
    const [editable, setEditable] = useState<boolean>( false )
    const titleRef = useRef<HTMLDivElement | null>( null )

    const [ { data, loading, error }, setNewTitle ] = useMutation()
    const { id } = useData()

    console.log( data )

    const editTitle: 
    ( e: KeyboardEvent<HTMLDivElement> ) => void
    = e => {
        if( e.key !== "Enter" ) return
        
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
            onKeyDown={ editTitle }  
            onInput={ e => setTitle( e.currentTarget.innerText ) }
        >
            { title }
        </div>
        <div 
            className={ styles.text_layout_edit } 
            onClick={ () => setEditable( true ) }
        >
        {
            newTitle.trim() !== title && editable &&
            <div className={ styles.title_buttons }>
                ✔
            </div>
        }
            <div className={ styles.title_buttons }>
                edit
            </div>
        </div>
    </div>
    )
}

export default TextNoteTitle