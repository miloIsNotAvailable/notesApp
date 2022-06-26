import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useData } from "../../../../../contexts/HomeContext";
import { useMutation } from "../../../../../hooks/graphql/useMutation";
import { styles } from "./DisplayNoteStyles";

interface ModalNoteTitleProps {
    title: string
    noteId: string
}

const TITLE_MUTATION = `
mutation newTitle( $title:String, $id:String, $noteId: String ) {
    newTitle(title:$title, id:$id, noteId: $noteId) {
      title
      id
      noteId
    }
  }
`

const ModalNoteTitle: FC<ModalNoteTitleProps> 
= ( { title, noteId } ) => {

    const [ { data, error, loading }, setNewNote ] = useMutation()

    const { id } = useData()
    const titleRef = useRef<HTMLDivElement | null>( null )

    const [ editable, setEditable ] = useState<boolean>( false ) 
    const [ newTitle, setNewTitle ] = useState<string>( title ) 

    useEffect( () => {
        setNewTitle( title )
    }, [ title ] )

    const handleNewNote: 
    ( e: KeyboardEvent<HTMLDivElement> ) => void 
    = e => {
        if( !titleRef.current || e.key !== 'Enter' ) return

        setNewTitle( titleRef.current.innerText )
        setEditable( false )

        setNewNote( TITLE_MUTATION, {
            args: {
                title: titleRef.current.innerText,
                id: id,
                noteId: noteId
            }
        } )
    }

    return (
        <div className={ styles.modal_title }>
            <div 
                ref={ titleRef } 
                contentEditable={ editable }
                onKeyDown={ handleNewNote }
                onBlur={ () => {
                    setEditable( false )
                    if(titleRef.current) titleRef.current.innerText = data?.newTitle?.title || newTitle 
                } }
            >
                { newTitle }
            </div>
            <div className={ styles.modal_edit }>
                <div onClick={ () => setEditable( true ) }>
                    edit
                </div>
            </div>
        </div>
    )
}

export default ModalNoteTitle