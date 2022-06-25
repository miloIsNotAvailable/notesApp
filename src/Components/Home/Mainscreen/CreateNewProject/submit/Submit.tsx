import { EventHandler, FC, MouseEvent, useEffect, useState } from "react";
import { NOTE_MUTATION } from "../../../../../constants/queries";
import { useData } from "../../../../../contexts/HomeContext";
import { useMutation } from "../../../../../hooks/graphql/useMutation";
import { useNoteType } from "../../../../../hooks/home/useNoteType";
import { setNewNote } from "../../../../../store/Home/newNote";
import { setNoteType } from "../../../../../store/Home/NoteInputType";
import { useAppDispatch } from "../../../../../store/hooks";
import { styles } from "./SubmitStyles";

const Submit: FC = () => {

    const { 
        content, 
        type 
    } = useNoteType()

    const { id } = useData()

    const dispatch = useAppDispatch()
    const [ { data, loading, error }, setNote ] = useMutation()
    const [ notesLoading, setNotesLoading ] = useState( 0 )

    useEffect( () =>{
        console.log( data, loading )
        dispatch( setNewNote( {
            newNotes: data?.newNote || null,
            loading: !data,
            notesLoading: notesLoading
        } ) )
    }, [ data, loading ] )

    const handleClick: 
    ( e: MouseEvent<HTMLDivElement> ) => void = ( e ) => {

        // prevent default to avoid unnecessary refresh
        e.preventDefault()

        content && content?.length < 255 && 
        setNote(
            NOTE_MUTATION, 
            {
                args: {
                    content,
                    title: 'hey',
                    type,
                    userId: id
                }
            }
        )

        setNotesLoading( prev => !data ? prev + 1 : 0 )

        // reset input on submit
        dispatch(setNoteType( { 
            content: null,
            type: type
         } )  )

        const textNote = document.getElementById( 'textnote' )
        if( textNote?.innerText ) textNote.innerText = ""
    }

    if( !content?.trim() ) return <div/>

    return (
        <div className={ styles.submit_button }
        onClick={ handleClick }>
            { '✔' }
        </div>
    )
}

export default Submit