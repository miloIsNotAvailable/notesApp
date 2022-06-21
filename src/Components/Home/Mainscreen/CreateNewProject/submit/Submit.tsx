import { FC, useEffect, useRef, useState } from "react";
import { useMutation } from "../../../../../hooks/graphql/useMutation";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./SubmitStyles";

const NOTE_MUTATION = `
    mutation createNote( $id:String, $title:String, $content:String ){
        newNote( id:$id, content:$content, title:$title ) {
            id
            title
            content
        }
    }
`

const Submit: FC = () => {

    const { 
        content, 
        type 
    } = useNoteType()

    const dispatch = useAppDispatch()
    const [ { data, loading, error }, setNote ] = useMutation()

    useEffect( () =>{
        console.log( data, loading )
    }, [ data, loading ] )

    const handleClick: () => void = () => {

        setNote(
            NOTE_MUTATION, 
            {
                args: {
                    id: 'hello', 
                    content,
                    title: 'hey'
                }
            }
        )

        // reset input on submit
        dispatch(setNoteType( { 
            content: null,
            type: type
         } )  )

        const textNote = document.getElementById( 'textnote' )
        if( textNote?.innerText ) textNote.innerText = ""
    }

    if( !content?.trim ) return <div/>

    return (
        <div className={ styles.submit_button }
        onClick={ handleClick }>
            { '✔' }
        </div>
    )
}

export default Submit